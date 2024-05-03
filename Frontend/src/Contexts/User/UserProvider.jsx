import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";
import axios from "axios";
import URL from "../../Constants/URL";
import { toast } from "react-toastify";
const UserProvider = (props) => {
  const [user, setUser] = useState(null);
  // useEffect(()=>{
  //   console.log("user: ", user)
  // }, [user])
  async function fetchUser() {
    try {
      const response = await axios.get(`${URL}/auth/fetchUser`, {
        withCredentials: true,
      });
      // console.log(response.data);
      setUser(response.data.data);
    } catch (err) {
      console.log(err.response.data.message);
      toast.error(err.response.data.message);
      setUser(null);
      if (err.response.data.status === 401) {
        setTimeout(() => {
          window.location.href = "/login";
        }, 1000);
      }
    }
  }

  async function logoutUser() {
    try {
      const response = await axios.get(`${URL}/auth/logout`, {
        withCredentials: true,
      });
      toast.success("Logout Successfull");
      setUser(null);
      setTimeout(() => {
        window.location.href = "/login";
      }, 1000);
    } catch (err) {
      console.log(err);
      toast.error("Failed to Logout");
    }
  }

  async function logoutAllDevices() {
    try {
      const response = await axios.get(`${URL}/auth/logOutOfAllDevices`, {
        withCredentials: true,
      });
      toast.success("Successfully logged out from all devices");
      setUser(null);
      setTimeout(() => {
        window.location.href = "/login";
      }, 1000);
    } catch (err) {
      console.log(err);
      toast.error("Failed to Logout");
    }
  }
  return (
    <UserContext.Provider value={{ user, setUser, fetchUser, logoutUser , logoutAllDevices}}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
