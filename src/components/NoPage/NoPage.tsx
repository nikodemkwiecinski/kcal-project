import React from "react";

import Footer from "../Footer/Footer";

const NoPage: React.FC = () => {
  return (
    <section className="right-panel">
      <div className="right-panel-content flex">
        <h1 className="text-dark-blue m-auto font-bold text-xl">
          Something went wrong 404
        </h1>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default NoPage;
