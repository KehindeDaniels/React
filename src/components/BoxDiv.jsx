import React, { useState } from "react";

const BoxDiv = (props) => {
  const [on, setOn] = useState(props.on);

  function toggleOn() {
    setOn((prevOn) => !prevOn);
  }
  let bg = on && "bg-black";
  return (
    <>
      <div
        onClick={() => props.handleClick(props.id)}
        key={props.key}
        className={`w-28 h-28 border ${bg}  border-black`}
      ></div>
    </>
  );
};

export default BoxDiv;
