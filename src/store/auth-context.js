import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //useEffect(함수, 의존성 배열)
  //useEffect(()=>{}, [])
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === "1") {
      setIsLoggedIn(true);
    }
  }, []); //빈 배열은 최초 1회 로드시 실행

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem("token", "1"); //로그인 했으면 1, 안했으면 2
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
