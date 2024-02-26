import React, { useState } from "react";

const Round = (props) => {
  const [on, setOn] = useState(props.on);
  function toggle() {
    setOn((prevOn) => !prevOn);
  }
  return (
    <>
      <div
        className={`w-14 h-14 rounded-full border border-black ${
          props.on && "bg-black"
        } `}
        onClick={props.handleToggle}
      ></div>

      {/* Each box controlling it's state */}
      {/* <div
        className={`w-14 h-14 rounded-full border border-black ${
          on && "bg-black"
        } `}
        onClick={toggle}
      ></div> */}
    </>
  );
};

export default Round;
