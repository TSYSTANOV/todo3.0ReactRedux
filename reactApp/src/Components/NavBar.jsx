import { NavLink } from "react-router-dom";
import "../App.css";
function NavBar() {
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
      </div>
    </div>
  );
}
export { NavBar };
