import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import User from "./components/User";

export default function App() {
  return (
    <div className="App">
      <div className="nav"> 
        <Link to="/"> Home </Link>
        <Link to="About"> About </Link>
        <Link to="Contact"> Contact </Link>
        <Link to="User"> User </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="User" element={<User />} />
      </Routes>
    </div>
  );
}
