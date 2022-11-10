import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function User() {
  let navigate = useNavigate();
  let params = useParams();
  function onUser() {
    navigate("/");
  }
  return (
    <div>
      {params.id}
      <br/>
      <h1>User page</h1>
      <button onClick={onUser}>Again go to Home</button>
    </div>
  );
}
export default User