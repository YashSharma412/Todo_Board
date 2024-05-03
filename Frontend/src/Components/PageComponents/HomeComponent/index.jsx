import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Common/Button";
import LoginJpg from "../../../assets/img/task.png";
import "./styles.css";
const HomeComponent = () => {
  const navigate = useNavigate();
  function handleNav(str) {
    navigate(`/${str}`);
  }
  return (
    <div className="home">
      <div className="home__image">
        <img src={LoginJpg} alt="login" />
      </div>
      <div className="home__article">
        <div className="home__header">
          <h1 className="text heading">Welcome to Todo Board</h1>
          <p className="text article">
            One stop solution to your productivity.
          </p>
          <p className="text article">Keep track of your tasks efficently !</p>
        </div>
        <div className="btns__container">
          <Button onClick={() => handleNav("signup")} className={"btn active"}>
            Create Account
          </Button>
          <Button onClick={() => handleNav("login")} className={"btn"}>
            Already Registered? Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
