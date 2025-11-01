import React from "react";
import { href } from "react-router-dom";

const useAuthentication = () => {
  const googleAuthentication = () => {
    window.location.href = "http://localhost:3400/auth/google";
  };
};

export default useAuthentication;
