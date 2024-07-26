import React, { useState } from "react";
import Category from "../components/Category";
import Tags from "../components/Tags";
import Child from "../components/Child";

const About = () => {
  const [reset, setReset] = useState(false);

  const handleReset = () => {
    setReset(true);
  };

  const fromChild = () => {
    console.log('child called');
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Category reset={reset} setReset={setReset} />
          <hr />
          <Tags />
          <button className="mt-5 btn btn-success" onClick={handleReset}>
            Reset Form
          </button>
        </div>
      </div>

      <Child handleClick={fromChild} />
    </div>
  );
};

export default About;
