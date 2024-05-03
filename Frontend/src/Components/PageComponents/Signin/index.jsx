import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "./styles.css";
import URL from "../../../Constants/URL";
import signInImg from "../../../assets/img/GirlSignIn.png";
import validateSignUp from "../../../Functions/validateSignUp";
import FormField from "../../Common/FormField";
import Button from "../../Common/Button";

const Signin = () => {
  const navigate = useNavigate();
  const [signInUser, setSignInUser] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  async function handleUserSignUp(event) {
    event.preventDefault();
    //? Validating Sign Up data
    try {
      const test = await validateSignUp(signInUser);
    } catch (err) {
      console.error(err);
      toast.error(err);
      return;
    }

    //? Sending data to server
    try {
      const response = await axios.post(
        `${URL}/auth/signup`,
        {
          name: signInUser.name,
          email: signInUser.email,
          username: signInUser.username,
          password: signInUser.password,
        },
        { withCredentials: true }
      );
      console.log(response.data);
      toast.success(response.data.message);
      navigate("/login");
    } catch (err) {
      // console.log(err.response.data.message);
      toast.error(err.response.data.message);
      return;
    }
  }
  return (
    <div className="signin">
      <div className="signin__form-cont">
        <form className="signin__form" onSubmit={handleUserSignUp}>
          <div className="form__body">
            <h1>Sign Up</h1>
            <FormField
              type={"text"}
              className={"accent"}
              id={"name"}
              name={"name"}
              labelTxt={"Enter name "}
              placeholder={"Enter name"}
              value={signInUser.name}
              onChange={(e) =>
                setSignInUser({ ...signInUser, name: e.target.value })
              }
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
              onChange={(e) =>
                setSignInUser({ ...signInUser, email: e.target.value })
              }
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
              onChange={(e) =>
                setSignInUser({ ...signInUser, username: e.target.value })
              }
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
              onChange={(e) =>
                setSignInUser({ ...signInUser, password: e.target.value })
              }
              isPassword
              required
            />
            <FormField
              type={"password"}
              className={"accent"}
              id={"confirmPassword"}
              name={"confirmPassword"}
              labelTxt={"Confirm password "}
              placeholder={"Confirm password"}
              value={signInUser.confirmPassword}
              onChange={(e) =>
                setSignInUser({
                  ...signInUser,
                  confirmPassword: e.target.value,
                })
              }
              isPassword
              required
            />
          </div>
          <div className="form__btn-cnt">
            <p>
              Already have an account ?{" "}
              <span className="accent" onClick={() => navigate("/login")}>
                {" "}
                Log in !{" "}
              </span>
            </p>
            <Button className={"accent"} type={"submit"}>
              Sign Up
            </Button>
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
