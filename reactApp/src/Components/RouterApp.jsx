import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../Context/context";
import { NavBar } from "./NavBar";
import { privateRoutes, publicRoutes } from "../route/routes";
import { Loader } from "../UI/Loader/Loader";

function RouterApp() {
  const { isAuth, isLoading } = useContext(AuthContext);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      {isAuth && <NavBar />}
      <Routes>
        {isAuth
          ? privateRoutes.map((route) => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              );
            })
          : publicRoutes.map((route) => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              );
            })}
      </Routes>
    </>
  );
}
export { RouterApp };
