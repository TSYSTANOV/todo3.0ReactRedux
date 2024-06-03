import { Navigate } from "react-router-dom";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { PostIdPage } from "../pages/PostIdPage";
import { Posts } from "../pages/Posts";
import { Login } from "../Components/Login";

export const privateRoutes = [
  { path: "about", element: <About /> },
  { path: "posts", element: <Posts /> },
  { path: "posts/:id", element: <PostIdPage /> },
  { path: "*", element: <Navigate to="/" replace /> },
];
export const publicRoutes = [
  { path: "login", element: <Login /> },
  { path: "*", element: <Navigate to="login" replace /> },
  //   { path: "posts", element: <Posts /> },
  //   { path: "posts/:id", element: <PostIdPage /> },
];
