import Count from "./Count.jsx";
import AddItems from "./components/AddItems.jsx";
import Box from "./components/Box.jsx";
import Header from "./components/Header.jsx";
import { Main } from "./components/Main.jsx";
import Profile from "./components/Profile.jsx";

import { useState } from "react";
import Square from "./square/Square.jsx";
import Forms from "./components/Forms.jsx";
import LoginForm from "./components/LoginForm.jsx";

export default function App() {
  const [userName, setUSerName] = useState("joe");
  return (
    <div className="max-w-[550px] mx-auto my-8 bg-gradient-to">
      {/* <Header/> */}
      {/* <Main/> */}
      {/* <AddItems/> */}
      {/* <Profile/> */}
      {/* <Count/> */}
      {/* <Box/> */}
      {/* <Square/> */}
      {/* <Forms /> */}
      <LoginForm />
    </div>
  );
}
