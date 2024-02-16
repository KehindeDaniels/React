import React, { useState } from "react";
import squareData from "./data";

const Square = () => {
  const [squares, setSquare] = useState(squareData);

  function toggle(id) {
    setSquare((prevSquare) => {
      return prevSquare.map((square) => {
        if (square.id === id) {
          return { ...square, on: !square.on };
        } else {
          return square;
        }
      });
    });
  }

  const square = squares.map((eachSquare, index) => {
    const bg = eachSquare.on && "bg-black";
    return (
      <div
        onClick={() => toggle(eachSquare.id)}
        key={index}
        className={`w-52 h-52 border border-black  rounded-lg ${bg}`}
      ></div>
    );
  });

  return <div className="grid grid-cols-3 gap-x-32 gap-y-4">{square}</div>;
};

export default Square;
