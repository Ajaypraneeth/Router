import React from "react";
import { useNavigate } from "react-router";

  function Contact() {
    let navigate = useNavigate();
  function onCon() {
    navigate("/User");
  }
  return (
    <div>
      <h1>Contact page</h1>
      <button onClick={onCon}>Go to User page</button>
    </div> 
  )
}


export default Contact


