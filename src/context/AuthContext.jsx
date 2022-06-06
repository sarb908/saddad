import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const logoutHandler = () => {
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, logoutHandler, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
