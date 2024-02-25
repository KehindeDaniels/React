import React, { useState } from "react";

const Forms = () => {
  // const [isChecked, setIsChecked] = useState(true);

  // function handleChecked(event) {
  //   setIsChecked(event.target.checked);
  //              OR
  //   setIsChecked((prevIschecked) => !prevIschecked);
  // }

  const [selected, updateSelected] = useState(true);

  function handleSelected(event) {
    updateSelected(event.target.value);
  }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    checkbox: "",
    radio: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  return (
    <>
      <form>
        {/* <input
          type="text"
          className="border border-black p-2 mr-2"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          className="border border-black p-2 mr-2"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          type="email"
          className="border border-black p-2 mr-2"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="checkbox"
          id="subscribe"
          className="border border-black p-2 mr-2"
          name="checkbox"
          checked={formData.checkbox}
          onChange={handleChange}
        />
        <label htmlFor="subscribe">Subscribe</label> */}

        <button
          type="submit"
          className="block bg-slate-400 py-2 px-4 rounded-3xl mt-4"
        >
          Submit
        </button>

        <fieldset className="border border-gray-400">
          <legend>This is a radio field</legend>

          <input
            type="radio"
            id="web design"
            className=""
            name="radio"
            checked={selected}
            onChange={handleSelected}
          />
          <label htmlFor="web design" className="mr-4">
            web design
          </label>
          <input
            type="radio"
            id="web development"
            className=""
            name="radio"
            value="web design"
            checked={selected === "web development"}
            onChange={handleSelected}
          />
          <label htmlFor="web development" className="mr-4">
            web development
          </label>
        </fieldset>
      </form>
    </>
  );
};

export default Forms;
