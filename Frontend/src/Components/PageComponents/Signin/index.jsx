import React, { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import signInImg from "../../../assets/img/GirlSignIn.png";
import Button from "../../Common/Button";
import FormField from "../../Common/FormField";
const Signin = () => {
  const navigate = useNavigate();
  const [signInUser, setSignInUser] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPssword: "",
  });
  return (
    <div className="signin">
      <div className="signin__form-cont">
        <form className="signin__form">
          <div className="form__body">
            <h1>Sign In</h1>
            <FormField 
              type={"text"}
              className={"accent"}
              id={"name"}
              name={"name"}
              labelTxt={"Enter name "}
              placeholder={"Enter name"}
              value={signInUser.name}
              onChange={(e) => setSignInUser({ ...signInUser, name: e.target.value })}
              required
            />
            <FormField 
              type={"email"}
              className={"accent"}
              id={"email"}
              name={"email"}
              labelTxt={"Enter email address "}
              placeholder={"abc@gmail.com"}
              value={signInUser.email}
              onChange={(e) => setSignInUser({ ...signInUser, email: e.target.value })}
              required
            />
            <FormField 
              type={"text"}
              className={"accent"}
              id={"username"}
              name={"username"}
              labelTxt={"Enter an username "}
              placeholder={"Enter an username"}
              value={signInUser.username}
              onChange={(e) => setSignInUser({ ...signInUser, username: e.target.value })}
              required
            />
            <FormField 
              type={"password"}
              className={"accent"}
              id={"password"}
              name={"password"}
              labelTxt={"Enter password "}
              placeholder={"Enter password"}
              value={signInUser.password}
              onChange={(e) => setSignInUser({ ...signInUser, password: e.target.value })}
              isPassword
              required
            />
            <FormField 
              type={"password"}
              className={"accent"}
              id={"confirmPssword"}
              name={"confirmPssword"}
              labelTxt={"Confirm password "}
              placeholder={"Confirm password"}
              value={signInUser.confirmPssword}
              onChange={(e) => setSignInUser({ ...signInUser, confirmPssword: e.target.value })}
              isPassword
              required
            />
            
          </div>
          <div className="form__btn-cnt">
            <p>
              Already have an account ?{" "}
              <span className="accent" onClick={() => navigate("/")}> Log in ! </span>
            </p>
            <Button className={"accent"} type={"submit"}>Sign Up</Button>
          </div>
        </form>
      </div>
      <div className="header">
        <div className="header__img-cnt">
          <img src={signInImg} alt="sign in" className="header__img" />
        </div>
      </div>
    </div>
  );
};

export default Signin;
