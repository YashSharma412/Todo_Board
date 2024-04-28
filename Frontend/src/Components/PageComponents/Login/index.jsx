import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "./styles.css";
import URL from "../../../Constants/URL";
import LoginJpg from "../../../assets/img/task.png";
import FormField from "../../Common/FormField";
import Button from "../../Common/Button";
const Login = () => {
  const navigate = useNavigate();
  const [loginUser, setLoginUser] = useState({
    loginId: "",
    password: "",
  });
  async function handleLogin(event) {
    event.preventDefault();
    try {
      const response = await axios.post(`${URL}/auth/login`, loginUser);
      if (!response)
        throw new Error({
          response: {
            data: {
              message: "No response from server",
            },
          },
        });
      // console.log(response.data.data);
      toast.success("Login Successfull");
        setTimeout(() => navigate("/dashboard"), 1000);

    } catch (err) {
      // console.log(err.response.data.status);
      toast.error(err.response.data.message);
      if (err.response.data.status === 404)
        setTimeout(() => navigate("/signup"), 1000);
    }
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
            <p>
              Don't have an account?{" "}
              <span onClick={() => navigate("/signup")}>Sign up !</span>
            </p>
            <Button type={"submit"} onClick={() => console.log("logging in")}>
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
