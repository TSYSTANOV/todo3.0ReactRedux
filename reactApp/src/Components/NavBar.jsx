import { NavLink } from "react-router-dom";
import "../App.css";
import { MyButton } from "../UI/Button/MyButton";
import { useContext } from "react";
import { AuthContext } from "../Context/context";
function NavBar() {
  const { setIsAuth } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navbar__links">
        <NavLink to="/" className={"navbar__link"}>
          Home
        </NavLink>
        <NavLink to="posts" className={"navbar__link"}>
          Posts
        </NavLink>
        <NavLink to="about" className={"navbar__link"}>
          About
        </NavLink>
        <MyButton
          onClick={() => {
            setIsAuth(false);
            localStorage.removeItem("auth");
          }}
        >
          Quit
        </MyButton>
      </div>
    </div>
  );
}
export { NavBar };
