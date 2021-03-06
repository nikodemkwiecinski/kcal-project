import React, { useContext, useEffect, useState } from "react";

import { ActiveUser, UserStoreContext } from "../../UserStore/UserStore";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import MealHeader from "./MealHeader/MealHeader";

import {
  ActionTypes,
  Meal,
  UserAction,
  UserInfo,
} from "./../../UserStore/UserTypes";

const WEEKDAY: Array<string> = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const MEALS: Array<string> = [
  "Breakfast",
  "Snack 1",
  "Lunch",
  "Snack 2",
  "Dinner",
];

interface Props {
  currDay: Date;
  setCurrDay: React.Dispatch<React.SetStateAction<Date>>;
}

const KcalPanel: React.FC<Props> = ({ currDay, setCurrDay }) => {
  const [mealsArray, setMealsArray] = useState<Array<Meal>>([]);

  const users = useContext(UserStoreContext);
  const activeUser = useContext(ActiveUser);
  const currentUser = users?.users.find(
    (elem) => elem.id === activeUser?.activeUser
  );

  const changeDate = (param: string) => {
    const date: Date = new Date(currDay);
    if (param === "increment") {
      date.setDate(date.getDate() + 1);
    } else if (param === "decrement") {
      date.setDate(date.getDate() - 1);
    }
    setCurrDay(date);
  };

  useEffect(() => {
    const currArr = currentUser?.meals?.find(
      (elem) => elem.date.getTime() === currDay.getTime()
    );
    if (currArr === undefined) {
      setMealsArray([]);
    } else {
      setMealsArray(currArr.meals);
    }
  }, [currDay]);

  const addMealToUser = () => {
    const { id, login, password } = currentUser as UserInfo;
    const index =
      currentUser?.meals !== undefined
        ? currentUser.meals.findIndex((elem) => elem.date === currDay)
        : -1;
    const editedUser: UserAction = {
      payload: {
        ...currentUser,
        id,
        login,
        password,
        meals:
          currentUser?.meals !== undefined
            ? [
                ...currentUser.meals.filter(
                  (elem) => elem.date.getTime() !== currDay.getTime()
                ),
                {
                  date: currDay,
                  meals: [...mealsArray],
                },
              ]
            : [{ date: currDay, meals: mealsArray }],
      },
      type: ActionTypes.EDIT,
    };
    users?.dispatch(editedUser);
  };

  const checkIfDifferentArrays = () => {
    const arr = currentUser?.meals?.find(
      (elem) => elem.date.getTime() === currDay.getTime()
    );
    let currArr: Meal[];
    if (arr === undefined) {
      return false;
    } else {
      currArr = arr.meals;
      return (
        Array.isArray(currArr) &&
        Array.isArray(mealsArray) &&
        mealsArray.length === currArr.length &&
        mealsArray.every((elem, index) => elem === currArr[index])
      );
    }
  };

  useEffect(() => {
    if (mealsArray.length > 0 && !checkIfDifferentArrays()) {
      addMealToUser();
    }
  }, [mealsArray]);

  const meals = MEALS.map((elem) => (
    <li className="mb-2" key={`${elem}10`}>
      <MealHeader
        mealName={elem}
        mealsArray={mealsArray}
        setMealArray={setMealsArray}
      />
    </li>
  ));

  const totalKcal = mealsArray.reduce(
    (total, curValue) => total + curValue.kcal,
    0
  );
  const totalProtien = mealsArray.reduce(
    (total, curValue) => total + curValue.protein,
    0
  );
  const totalFat = mealsArray.reduce(
    (total, curValue) => total + curValue.fat,
    0
  );
  const totalCarbs = mealsArray.reduce(
    (total, curValue) => total + curValue.carbs,
    0
  );

  return (
    <section className="w-1/2 h-8/10 bg-white shadow-lg rounded flex flex-col my-auto">
      <header className="flex text-dark-blue mx-auto 2xl:my-4 my-2">
        <button
          onClick={() => changeDate("decrement")}
          className="mr-8 2xl:text-3xl text-2xl"
        >
          <FontAwesomeIcon icon={solid("caret-left")} />
        </button>
        <div className="2xl:text-xl text-lg">
          <p className="font-bold text-center">{WEEKDAY[currDay.getDay()]}</p>
          <p className="font-bold text-center">
            {`${currDay.getDate()}.${
              currDay.getMonth() + 1 < 10
                ? "0" + (currDay.getMonth() + 1)
                : currDay.getMonth() + 1
            }.${currDay.getFullYear()}`}
          </p>
        </div>
        <button
          onClick={() => changeDate("increment")}
          className="ml-8 2xl:text-3xl text-2xl"
        >
          <FontAwesomeIcon icon={solid("caret-right")} />
        </button>
      </header>
      <hr className="bg-extra-light-blue border border-solid w-10/12 mx-auto mb-2" />
      <section className="overflow-y-auto h-80%">
        <ul>{meals}</ul>
      </section>
      <hr className="bg-extra-light-blue border border-solid w-10/12 mx-auto mt-2" />
      <div className="flex justify-around place-items-end text-dark-blue my-3 text-sm">
        <div>
          <p className="text-center font-bold">Calories:</p>
          <p
            className={`text-center font-bold ${
              currentUser?.calories === undefined
                ? null
                : totalKcal > currentUser.calories
                ? "text-red-600"
                : null
            }`}
          >
            {totalKcal}
            {currentUser?.calories === undefined
              ? null
              : `/${currentUser.calories}`}
          </p>
        </div>
        <div>
          <p className="text-center font-bold">Proteins:</p>
          <p
            className={`text-center font-bold ${
              currentUser?.proteins === undefined
                ? null
                : totalProtien > currentUser.proteins
                ? "text-red-600"
                : null
            }`}
          >
            {parseFloat(
              mealsArray
                .reduce((total, curValue) => total + curValue.protein, 0)
                .toFixed(2)
            )}
            {currentUser?.proteins === undefined
              ? null
              : `/${currentUser.proteins}`}
          </p>
        </div>
        <div>
          <p className="text-center font-bold">Fats:</p>
          <p
            className={`text-center font-bold ${
              currentUser?.fats === undefined
                ? null
                : totalFat > currentUser.fats
                ? "text-red-600"
                : null
            }`}
          >
            {parseFloat(
              mealsArray
                .reduce((total, curValue) => total + curValue.fat, 0)
                .toFixed(2)
            )}
            {currentUser?.fats === undefined ? null : `/${currentUser.fats}`}
          </p>
        </div>
        <div>
          <p className="text-center font-bold">Carbs:</p>
          <p
            className={`text-center font-bold ${
              currentUser?.carbs === undefined
                ? null
                : totalCarbs > currentUser.carbs
                ? "text-red-600"
                : null
            }`}
          >
            {parseFloat(
              mealsArray
                .reduce((total, curValue) => total + curValue.carbs, 0)
                .toFixed(2)
            )}
            {currentUser?.carbs === undefined ? null : `/${currentUser.carbs}`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default KcalPanel;
