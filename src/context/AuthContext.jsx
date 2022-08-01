import React, { createContext, useState, useEffect } from "react";
import { userObserver } from "../helpers/firebase";

export const AuthContext = createContext(); //* 1 aşama oluşturma

const AuthContextProvider = ({ children }) => {
  //*taşıma kısmı kamyon kasası
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
