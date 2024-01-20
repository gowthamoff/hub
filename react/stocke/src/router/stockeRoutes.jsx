import React from "react";

const HomePage = React.lazy(() => import("../pages/Main/Main"));
const Login = React.lazy(() => import("../pages/Login/Login"));
const Register = React.lazy(() => import("../pages/Login/Register"));
const Action = React.lazy(() => import("../pages/Action/Action"));

export const MerchantRoutes = [
  { path: "/", component: <HomePage /> },
  { path: "/login", component: <Login /> },
  { path: "/register", component: <Register /> },
  { path: "/action/:id", component: <Action /> },
];
