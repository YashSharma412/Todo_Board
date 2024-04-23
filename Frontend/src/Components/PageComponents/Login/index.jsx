import React, { useState } from "react";
import "./styles.css";
import LoginJpg from "../../../assets/img/task.png";
import Button from "../../Common/Button";
import FormField from "../../Common/FormField";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loginUser, setLoginUser] = useState({
    loginId: "",
    password: "",
  });
  function handleLogin(event) {
    event.preventDefault();
  }
  return (
    <div className="login">
      <div className="header">
        <div className="header__body">
          <h1> Welcome Back !</h1>
          <p>
            {" "}
            Manage and maintain a todo list easily, and keep your life on track
            !
          </p>
        </div>
        <div className="header__img-cont">
          <img src={LoginJpg} alt="login" />
        </div>
      </div>
      <div className="login__form-cont">
        <form className="login__form" onSubmit={handleLogin}>
          <div className="form__body">
            <FormField
              type={"text"}
              labelTxt={"Enter your Email or Username: "}
              id={"loginId"}
              placeholder={"Enter login Id"}
              value={loginUser.loginId}
              onChange={(e) =>
                setLoginUser({ ...loginUser, loginId: e.target.value })
              }
              required
              name={"loginId"}
            />
            <FormField 
              type={"password"}
              labelTxt={"Enter your Password: "}
              id={"password"}
              placeholder={"Enter password"}
              value={loginUser.password}
              onChange={(e) =>
                setLoginUser({ ...loginUser, password: e.target.value })
              }
              required
              name={"password"}
              isPassword={true}
            />
          </div>
          <div className="form__btn-cnt">
            <p>Don't have an account? <span onClick={()=>navigate("/signup")}>Sign up !</span></p>
            <Button type={"submit"}>Login</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
