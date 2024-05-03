import React, { useContext, useEffect, useState } from "react";
import "./styles.css";
import { IoMenu } from "react-icons/io5";
import UserContext from "../../../Contexts/User/UserContext";
import HiddenMenu from "../../Blocks/HiddenMenu";
const Navbar = () => {
  const {user} = useContext(UserContext);
  const [show, setShow] = useState(false);
  return (
    <nav className="navbar">
      <div>
        <h5>Welcome Back</h5>
        <h3>{user ? user.name : "null"}</h3>
      </div>
      <div className="menu__btn_cnt">
        <button onClick={()=>setShow(!show)}>
          <IoMenu />
        </button>
      </div>
      <HiddenMenu show={show} setShow={setShow}/>
    </nav>
  );
};

export default Navbar;
