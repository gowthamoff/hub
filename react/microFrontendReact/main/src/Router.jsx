import React from "react";
import Main from "./Main";
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom"; 
import Action from "action/action"
import Login from "login/login"
import Register from "register/register"

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Main />} />
          <Route path="/action/:id" element={<Action />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
