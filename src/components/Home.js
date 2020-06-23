import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../App";


export default function Home() {
  const { state, dispatch } = useContext(AuthContext);

  if (!state.isLoggedIn) {
    return <Redirect to="/login" />;
  }

  const handleLogout = () => {
    fetch("/auth/logout")
    .then((res) => dispatch({
      type: "LOGOUT"
    }));
  } 

  return (
    <div className="home">
      <div className="home-container">
        <button onClick={()=> handleLogout()}>Logout</button>
        <div className="identity-boxes">
          <div>MAKER</div>
          <div>MENTOR</div>
        </div>
      </div>
    </div>
  );
}
