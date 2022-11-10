import React, {} from "react";
import { useNavigate } from "react-router";
import '../components/home.css'


function Home() {
  
  let navigate = useNavigate();
  function router() {
    navigate("/About");
  }
  return (
    <div><br/>
    <div className="container.content">
      <h1>Login</h1>
       <input type="text" placeholder="Username" />
       <input type="text" placeholder="Password"/>
       <button onClick={router}>Submit</button>
       </div>
    </div>
  )
}
export default Home