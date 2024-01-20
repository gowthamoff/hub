import { Route, Routes, BrowserRouter } from "react-router-dom";
import React from "react";
import Main from "../pages/Main";
import Details from "../pages/Details";
const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
