import React, { useState } from "react";

import KcalPanel from "./KcalPanel/KcalPanel";
import Footer from "../Footer/Footer";
import TrackingPanel from "./TrackingPanel/TrackingPanel";

const Meals: React.FC = () => {
  const newDate = new Date();
  const [currDay, setCurrDay] = useState(
    new Date(
      `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`
    )
  );
  return (
    <section className="right-panel">
      <div className="right-panel-content bg-grey-bg flex justify-around">
        <KcalPanel currDay={currDay} setCurrDay={setCurrDay} />
        <div className="h-half w-45% bg-white shadow-lg rounded my-auto">
          <TrackingPanel />
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default Meals;
