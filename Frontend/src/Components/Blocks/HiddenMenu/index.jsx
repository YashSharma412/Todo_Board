import React, { useContext } from "react";
import "./styles.css";
import UserContext from "../../../Contexts/User/UserContext";
const HiddenMenu = ({ show, setShow }) => {
  const { logoutUser, logoutAllDevices } = useContext(UserContext);
  return (
    <div className={`menu__cnt ${show ? "show" : ""}`}>
      <ul>
        <li
          onClick={() => {
            logoutUser();
            setShow(false);
          }}
        >
          Logout
        </li>
        <li
          onClick={() => {
            logoutAllDevices();
            setShow(false);
          }}
        >
          Logout all Devices
        </li>
      </ul>
    </div>
  );
};

export default HiddenMenu;
