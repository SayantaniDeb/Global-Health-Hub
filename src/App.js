import Loginform from "./component/loginform";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import React from "react";
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route exact path='/' element={<Loginform/>}/>
    
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
