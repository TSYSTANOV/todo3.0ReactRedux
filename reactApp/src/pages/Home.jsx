import { Outlet } from "react-router-dom";
import { NavBar } from "../Components/NavBar";
function Home() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
export { Home };
