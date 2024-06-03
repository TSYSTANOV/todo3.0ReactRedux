import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { PostIdPage } from "./pages/PostIdPage";
import { Posts } from "./pages/Posts";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes, routes } from "./route/routes";
import { NavBar } from "./Components/NavBar";
import { AuthContext } from "./Context/context";
import { useEffect, useState } from "react";
import { RouterApp } from "./Components/RouterApp";
function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
      <BrowserRouter>
        <RouterApp />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
