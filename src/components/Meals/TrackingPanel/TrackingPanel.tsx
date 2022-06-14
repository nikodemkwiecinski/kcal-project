import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const TrackingPanel: React.FC = () => {
  const [isStepInput, setIsStepInput] = useState(false);
  const [isWaterInput, setIsWaterInput] = useState(false);

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
              className=" text-2xl"
              onClick={() => setIsStepInput(true)}
            />
            <FontAwesomeIcon
              icon={solid("minus")}
              className="text-2xl"
              onClick={() => setIsStepInput(true)}
            />
          </div>
          <p className="text-center font-bold">{0}</p>
          <p className="text-center font-bold">steps</p>
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
              className="block text-2xl"
              onClick={() => setIsWaterInput(true)}
            />
            <FontAwesomeIcon
              icon={solid("minus")}
              className="block text-2xl"
              onClick={() => setIsWaterInput(true)}
            />
          </div>
          {isWaterInput ? (
            <form action="">
              <input type="number" />
              <input type="submit" />
            </form>
          ) : (
            <>
              <p className="text-center font-bold">{0}</p>
              <p className="text-center font-bold ">ml</p>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default TrackingPanel;
