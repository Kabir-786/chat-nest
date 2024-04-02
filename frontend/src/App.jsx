import React from "react";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <>
      <div className="p-4 h-screen flex justify-center items-center">
        {/* <Login /> */}
        {/* <Signup/> */}
        <Home/>
        
      </div>
    </>
  );
};

export default App;
