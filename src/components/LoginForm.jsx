import React, { useState } from "react";

const LoginForm = () => {
  const [logInData, setLogInData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    isSubscribe: false,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    // setLogInData((prevLogInData) => ({ ...prevLogInData, [name]: value }));
    setLogInData((prevLogInData) => ({
      ...prevLogInData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitForm(event) {
    event.preventDefault();
    if (logInData.password === logInData.confirmPassword) {
      console.log("you are in");
      logInData.isSubscribe && console.log("Thank you for subscribing");
    } else console.log("Password do not match");
  }

  //   const error =

  return (
    <>
      <form
        className="mx-auto rounded w-64 bg-slate-400 p-8 flex flex-col items-start gap-4"
        onSubmit={submitForm}
      >
        <input
          type="email"
          className="max-w-full p-2 rounded"
          placeholder="enter your mail"
          name="email"
          value={logInData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          className="max-w-full p-2 rounded"
          placeholder="Password"
          name="password"
          value={logInData.password}
          onChange={handleChange}
        />
        <div className="confirm">
          <input
            type="password"
            className={`max-w-full p-2 rounded ${
              logInData.password != logInData.confirmPassword &&
              "border border-red-400"
            }`}
            placeholder="Confirm Password"
            name="confirmPassword"
            value={logInData.confirmPassword}
            onChange={handleChange}
          />
          {logInData.password != logInData.confirmPassword && (
            <p className="text-xs text-red-700 font-medium">
              Padwords do not match
            </p>
          )}
        </div>

        <div className="checkbox flex items-center gap-1">
          <input
            type="checkbox"
            id="isNewsLetter"
            // className=
            name="isSubscribe"
            checked={logInData.isSubscribe}
            onChange={handleChange}
          />
          <label htmlFor="isNewsLetter" className="leading-5">
            Subscribe to my News Letter
          </label>
        </div>

        <button>Sign up</button>
      </form>
    </>
  );
};

export default LoginForm;
