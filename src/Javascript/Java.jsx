import React from "react";

const Java = () => {
  function handleAsync() {
    console.log("i love");

    console.log("what");

    setTimeout(() => {
      console.log("you");
    }, 3000);

    console.log("do");
  }

  function handleCallback() {
    function callback() {
      console.log("call back function");
    }

    function theCaller(callback) {
      console.log("I am calling this");
      callback();
    }

    theCaller(callback);
  }
  return (
    <div className="flex flex-col gap-6">
      <button
        onClick={handleAsync}
        className="py-2 px-4 bg-green-700 text-white rounded-md"
      >
        click me: I am asynchrnous
      </button>
      <button
        onClick={handleCallback}
        className="py-2 px-4 bg-blue-700 text-white rounded-md"
      >
        click me: I am a call-back
      </button>
    </div>
  );
};

export default Java;
