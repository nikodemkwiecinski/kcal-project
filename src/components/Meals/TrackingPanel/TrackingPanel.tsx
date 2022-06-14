import React, { useContext, useEffect, useState } from "react";

import { ActiveUser, UserStoreContext } from "../../UserStore/UserStore";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { TrackDay } from "../../UserStore/UserTypes";

import {
  ActionTypes,
  Meal,
  UserAction,
  UserInfo,
} from "./../../UserStore/UserTypes";

interface Props {
  currDay: Date;
}

const TrackingPanel: React.FC<Props> = ({ currDay }) => {
  const [inputData, setIputData] = useState<[boolean, string, string]>([
    false,
    "",
    "",
  ]);
  const [water, setWater] = useState<number>(0);
  const [steps, setSteps] = useState<number>(0);
  const [trackDay, setTrackDay] = useState<TrackDay>({
    date: currDay,
    steps: 0,
    water: 0,
  });

  const users = useContext(UserStoreContext);
  const activeUser = useContext(ActiveUser);
  const currentUser = users?.users.find(
    (elem) => elem.id === activeUser?.activeUser
  );

  useEffect(() => {
    const currTrackDay = currentUser?.track?.find(
      (elem) => elem.date.getTime() === currDay.getTime()
    );
    if (currTrackDay !== undefined) {
      setTrackDay(currTrackDay);
    } else {
      setTrackDay({
        date: currDay,
        steps: 0,
        water: 0,
      });
    }
  }, [currDay]);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (inputData[2] === "steps") {
      if (inputData[1] === "plus") {
        setTrackDay((prev) => ({
          date: prev.date,
          steps: prev.steps + steps,
          water: prev.water,
        }));
      } else if (inputData[1] === "minus") {
        setTrackDay((prev) => ({
          date: prev.date,
          steps: prev.steps - steps < 0 ? 0 : prev.steps - steps,
          water: prev.water,
        }));
      }
    } else if (inputData[2] === "water") {
      if (inputData[1] === "plus") {
        setTrackDay((prev) => ({
          date: prev.date,
          steps: prev.steps,
          water: prev.water + water,
        }));
      } else if (inputData[1] === "minus") {
        setTrackDay((prev) => ({
          date: prev.date,
          steps: prev.steps,
          water: prev.water - water < 0 ? 0 : prev.water - water,
        }));
      }
    }
    setIputData([false, "", ""]);
  };

  useEffect(() => {
    const { id, login, password } = currentUser as UserInfo;
    const editedUser: UserAction = {
      payload: {
        ...currentUser,
        id,
        login,
        password,
        track:
          currentUser?.track !== undefined
            ? [
                ...currentUser.track.filter(
                  (elem) => elem.date.getTime() !== currDay.getTime()
                ),
                trackDay,
              ]
            : [trackDay],
      },
      type: ActionTypes.EDIT,
    };
    users?.dispatch(editedUser);
  }, [trackDay]);

  return (
    <>
      <h2 className="font-bold mt-1 text-3xl text-dark-blue text-center">
        Tracking
      </h2>
      <section className="flex justify-around text-dark-blue h-90%">
        <div className="w-45% h-3/4 my-auto">
          <h3 className="font-bold text-xl text-center">Steps</h3>
          <FontAwesomeIcon
            icon={solid("shoe-prints")}
            className="mx-auto mt-10 -rotate-45 text-9xl block"
          />
          <div className="flex justify-around w-1/2 mx-auto mt-12">
            <FontAwesomeIcon
              icon={solid("plus")}
              className=" text-2xl cursor-pointer"
              onClick={() => setIputData([true, "plus", "steps"])}
            />
            <FontAwesomeIcon
              icon={solid("minus")}
              className="text-2xl cursor-pointer"
              onClick={() => setIputData([true, "minus", "steps"])}
            />
          </div>
          {inputData[0] && inputData[2] === "steps" ? (
            <form onSubmit={handleSubmit}>
              <input
                type="number"
                value={steps}
                onChange={(e) => setSteps(parseInt(e.target.value))}
              />
              <input
                type="submit"
                value="Submit"
                className="block bg-dark-blue mx-auto text-white font-bold rounded shadow cursor-pointer py-1 px-2 mt-1"
              />
            </form>
          ) : (
            <>
              <p
                className={`text-center font-bold ${
                  currentUser?.steps === undefined
                    ? null
                    : trackDay.steps >= currentUser.steps
                    ? "text-green-600"
                    : null
                }`}
              >
                {trackDay.steps}
                {currentUser?.steps === undefined
                  ? null
                  : `/${currentUser.steps}`}
              </p>
              <p className="text-center font-bold">steps</p>
            </>
          )}
        </div>
        <div className="w-45% h-3/4 my-auto">
          <h3 className="font-bold text-xl text-center">Water consumption</h3>
          <FontAwesomeIcon
            icon={solid("glass-water")}
            className="mx-auto text-9xl block mt-10"
          />
          <div className="flex justify-around w-1/2 mx-auto mt-12">
            <FontAwesomeIcon
              icon={solid("plus")}
              className="block text-2xl cursor-pointer"
              onClick={() => setIputData([true, "plus", "water"])}
            />
            <FontAwesomeIcon
              icon={solid("minus")}
              className="block text-2xl cursor-pointer"
              onClick={() => setIputData([true, "minus", "water"])}
            />
          </div>
          {inputData[0] && inputData[2] === "water" ? (
            <form onSubmit={handleSubmit}>
              <input
                type="number"
                value={water}
                onChange={(e) => setWater(parseInt(e.target.value))}
              />
              <input
                type="submit"
                value="Submit"
                className="block bg-dark-blue mx-auto text-white font-bold rounded shadow cursor-pointer py-1 px-2 mt-1"
              />
            </form>
          ) : (
            <>
              <p
                className={`text-center font-bold ${
                  currentUser?.water === undefined
                    ? null
                    : trackDay.water >= currentUser.water
                    ? "text-green-600"
                    : null
                }`}
              >
                {trackDay.water}
                {currentUser?.steps === undefined
                  ? null
                  : `/${currentUser.water}`}
              </p>
              <p className="text-center font-bold ">ml</p>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default TrackingPanel;
