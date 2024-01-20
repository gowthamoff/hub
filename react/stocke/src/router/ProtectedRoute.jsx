import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const nav = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const validateLogin = () => {
    if (window.localStorage.getItem("stockekey")) {
      setIsLogin(true);
      nav('/')
    } else {
      setIsLogin(false);
      nav("/login");
    }
  };

  useEffect(() => {
    validateLogin();
  }, [isLogin]);

  return <React.Fragment>{isLogin ? props.children : null}</React.Fragment>;
};

export default ProtectedRoute;
