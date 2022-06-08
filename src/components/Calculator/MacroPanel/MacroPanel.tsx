import React, { useContext, useState } from "react";

import { ActiveUser, UserStoreContext } from "../../UserStore/UserStore";
import { ActionTypes, UserAction, UserInfo } from "../../UserStore/UserTypes";

import "./MacroPanel.css";

const MacroPanel: React.FC = () => {
  const [calories, setCalories] = useState<number>(2000);
  const [protein, setProtein] = useState<number>(100);
  const [fat, setFat] = useState<number>(67);
  const [carbs, setCarbs] = useState<number>(250);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isWrong, setIsWrong] = useState<boolean>(false);

  const activeUser = useContext(ActiveUser);
  const users = useContext(UserStoreContext);
  const currentUser = users?.users.find(
    (elem) => elem.id === activeUser?.activeUser
  );

  const errorMessage = isWrong ? (
    <p className="mt-4 text-center font-bold text-red-700">
      All values must be positive
    </p>
  ) : null;
  const dataSavedMessage = isCorrect ? (
    <p className="mt-4 text-center font-bold">Data saved</p>
  ) : null;

  const handleDataSaved = () => {
    setIsCorrect(false);
  };

  const handleError = () => {
    setIsWrong(false);
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (protein > 1 && fat > 1 && carbs > 1 && calories > 1) {
      const { id, login, password } = currentUser as UserInfo;

      const editedUser: UserAction = {
        payload: {
          ...currentUser,
          id,
          login,
          password,
          carbs,
          fats: fat,
          proteins: protein,
          calories,
        },
        type: ActionTypes.EDIT,
      };

      users?.dispatch(editedUser);
      setIsCorrect(true);
      setTimeout(handleDataSaved, 3000);
    } else {
      setIsWrong(true);
      setTimeout(handleError, 3000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="shadow text-dark-blue rounded border-2 w-4/5 p-4 border-extra-light-blue border-solid 2xl:overflow-auto lg:overflow-y-scroll"
    >
      <h2 className="text-dark-blue w-4/5 mx-auto text-center font-bold text-2xl my-2">
        Input macros by yourself
      </h2>
      <label htmlFor="" className="mt-2">
        Daily calories
        <input
          type="number"
          name=""
          id=""
          value={calories}
          onChange={(event) => setCalories(parseInt(event.target.value))}
        />
      </label>
      <label htmlFor="" className="mt-2">
        Protein
        <input
          type="number"
          name=""
          id=""
          value={protein}
          onChange={(event) => setProtein(parseInt(event.target.value))}
        />
      </label>
      <label htmlFor="" className="mt-2">
        Fats
        <input
          type="number"
          name=""
          id=""
          value={fat}
          onChange={(event) => setFat(parseInt(event.target.value))}
        />
      </label>
      <label htmlFor="" className="mt-2">
        Carbs
        <input
          type="number"
          name=""
          id=""
          value={carbs}
          onChange={(event) => setCarbs(parseInt(event.target.value))}
        />
      </label>
      <label htmlFor="" className="mt-2">
        <input
          type="submit"
          value="Submit"
          className="block bg-dark-blue mx-auto 2xl:h-10 h-8 2xl:w-32 w-24 mt-8 text-white font-bold rounded shadow cursor-pointer"
        />
      </label>
      {errorMessage}
      {dataSavedMessage}
    </form>
  );
};

export default MacroPanel;
