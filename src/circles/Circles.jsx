import React, { useState } from "react";
import data from "./data";
import Round from "./Round";

const Circles = () => {
  const [circles, setCircles] = useState(data);
  function handleToggle(id) {
    console.log(id);
    setCircles((prevCircle) =>
      prevCircle.map((prevCircle) => {
        return prevCircle.id === id
          ? { ...prevCircle, on: !prevCircle.on }
          : prevCircle;
      })
    );
  }

  const circle = circles.map((eachCircle, index) => {
    return (
      <Round
        key={eachCircle.id}
        on={eachCircle.on}
        id={eachCircle.id}
        handleToggle={() => handleToggle(eachCircle.id)}
      />
    );
  });

  return (
    <div className="flex flex-wrap justify-center items-center h-dvh w-ful gap-4 px-4 py-8">
      {circle}
    </div>
  );
};

export default Circles;
