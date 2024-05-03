import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../Contexts/User/UserContext";

const Authorized = (WrappedComponent) => {
  return (props) => {
    // console.log("test");
    const { user, fetchUser } = useContext(UserContext);
    useEffect(() => {
      fetchUser();
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default Authorized;
