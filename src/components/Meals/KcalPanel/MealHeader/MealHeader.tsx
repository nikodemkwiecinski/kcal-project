import React, { useContext, useState } from "react";
import { ActiveUser, UserStoreContext } from "../../../UserStore/UserStore";
import axios from "axios";
import "regenerator-runtime";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import Meal from "../Meal/Meal";
import {
  ActionTypes,
  UserAction,
  Meal as Meals,
} from "../../../UserStore/UserTypes";

interface Props {
  mealName: string;
  mealArray: Array<Meals>;
}

interface MealProps {
  mealName: string;
  totalKcal: number;
  protein: number;
  fat: number;
  carbs: number;
  id: number;
}

const MealHeader: React.FC<Props> = ({ mealName, mealArray }) => {
  const [totalKcal, setTotalKcal] = useState<number>(0);
  const [protein, setProtein] = useState<number>(0);
  const [fat, setFat] = useState<number>(0);
  const [carbs, setCarbs] = useState<number>(0);
  let [mealsArray, setMealsArray] = useState<Array<MealProps>>([]);
  const [isActive, setIsActive] = useState(false);
  const [ingredient, setIngredient] = useState("");
  const [grams, setGrams] = useState(0);

  const activeUser = useContext(ActiveUser);
  const users = useContext(UserStoreContext);

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    setIsActive(false);
    let newMeal: MealProps;
    let error = false;
    const options = {
      method: "GET",
      url: "http://127.0.0.1:5500/data",
      params: {
        ingredients: ingredient,
      },
    };

    await axios
      .request(options)
      .then((res) => {
        if (res.data.length > 0 && grams > 0) {
          const { foodNutrients } = res.data[0] as any;
          const protein = parseInt(
              (foodNutrients[0].value * Math.round(grams / 100)).toFixed(2)
            ),
            fat = parseInt(
              (foodNutrients[1].value * Math.round(grams / 100)).toFixed(2)
            ),
            carbs = parseInt(
              (foodNutrients[2].value * Math.round(grams / 100)).toFixed(2)
            );
          newMeal = {
            mealName:
              ingredient.slice(0, 1).toUpperCase() +
              ingredient.slice(1, ingredient.length),
            carbs,
            fat,
            protein,
            totalKcal: Math.round(protein * 4 + fat * 9 + carbs * 4),
            id: mealsArray.length
              ? mealsArray[mealsArray.length - 1].id + 1
              : 1,
          };
        } else {
          alert("Ingredient not found or grams are not positive value");
          error = true;
        }
      })
      .catch((err) => console.error(err));

    if (!error) {
      setMealsArray((prev) => [...prev, newMeal]);
      //@ts-ignore
      const { carbs, fat, protein, totalKcal } = newMeal;

      setProtein((prev) => prev + protein);
      setFat((prev) => prev + fat);
      setCarbs((prev) => prev + carbs);
      setTotalKcal((prev) => prev + totalKcal);
    }
    setIngredient("");
    setGrams(0);
  };

  const meals = mealsArray.map((elem) => (
    <Meal
      carbs={elem.carbs}
      fat={elem.fat}
      id={elem.id}
      mealName={elem.mealName}
      protein={elem.protein}
      totalKcal={elem.totalKcal}
      key={elem.id}
      mealsArray={mealsArray}
      setMealsArray={setMealsArray}
    />
  ));

  const addMealToUser = (date: Date) => {};

  return (
    <>
      <div className="flex w-10/12 mx-auto rounded p-2 bg-extra-light-blue justify-between">
        <div className="text-dark-blue w-3/12">
          <p className="font-bold text-lg text-center">{mealName}</p>
          <p className="font-bold text-center">{totalKcal} kcal</p>
        </div>
        <div className="text-dark-blue w-1/3">
          <p className="font-bold text-center">Total</p>
          <div className="flex justify-around">
            <span className="block text-center">{protein}g</span>
            <span className="block text-center">{fat}g</span>
            <span className="block text-center">{carbs}g</span>
          </div>
        </div>
        <FontAwesomeIcon
          icon={solid("plus")}
          className="text-dark-blue text-2xl my-auto cursor-pointer"
          onClick={() => setIsActive((prev) => !prev)}
        ></FontAwesomeIcon>
      </div>
      <form
        onSubmit={handleSubmit}
        className={`${
          isActive ? "block" : "hidden"
        } text-dark-blue w-9/12 mx-auto my-2`}
      >
        <label htmlFor="" className="mt-0">
          Input ingredient
          <input
            type="text"
            name=""
            id=""
            value={ingredient}
            onChange={(event) => setIngredient(event.target.value)}
            className="bg-extra-light-blue rounded shadow block mx-auto w-1/2"
          />
        </label>
        <label htmlFor="" className="mt-0">
          Input grams
          <input
            type="number"
            value={grams}
            onChange={(event) => setGrams(parseInt(event.target.value))}
          />
        </label>
        <label htmlFor="" className="mt-0">
          <input
            type="submit"
            className="block bg-dark-blue mx-auto text-white font-bold rounded shadow cursor-pointer py-1 px-2 mt-1"
            value="Submit"
          />
        </label>
      </form>
      <ul>{meals}</ul>
    </>
  );
};

export default MealHeader;
