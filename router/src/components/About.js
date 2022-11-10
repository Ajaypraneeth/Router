import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  let navigate = useNavigate();
  function router() {
    navigate("/Contact");
  }
  return (
    <div>
      <h1>About page
      </h1>
      <button onClick={router}>Go to Contact page</button>
    </div>
  );
}
export default About
