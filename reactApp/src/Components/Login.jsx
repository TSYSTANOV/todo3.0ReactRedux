import { useContext } from "react";
import { MyInput } from "../UI/Input/MyInput";
import { AuthContext } from "../Context/context";

function Login() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };
  return (
    <div>
      <h2>Login Page</h2>
      <form>
        <MyInput type="text" placeholder="Enter name" />
        <MyInput type="password" />
        <button onClick={handleLogin}>Enter</button>
      </form>
    </div>
  );
}
export { Login };
