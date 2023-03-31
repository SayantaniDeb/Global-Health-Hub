import Loginform from "./component/loginform";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Community from "./component/Community";
import User from "./component/User";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Loginform />} />
          <Route exact path="/Community" element={<Community />} />
          <Route exact path="/User" element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
