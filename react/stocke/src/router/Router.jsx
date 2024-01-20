import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { MerchantRoutes } from "./stockeRoutes";
import Login from "../pages/Login/index";
import ProtectedRoute from "./ProtectedRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {MerchantRoutes.map((data, index) => {
          let { path, component } = data;
          return (
            <Route
              path={path}
              key={index}
              element={
                <ProtectedRoute>
                  <div>{component}</div>
                </ProtectedRoute>
              }
              exact={true}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
