import "./Heroimg.css";
import React from 'react'
import Introimg from "../assets/images/img2.jpeg"
import {Link} from "react-router-dom";
const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
<img className="into-img" src=
{Introimg} alt = "Introimg"/>
        </div>
        <div className="content">
            <p>HI, I am ADARSH SEN SINGH.</p>
            <h1>React Developer</h1>
            <div>
                <Link to = "/project"
                className = "btn">Projects</Link>
                  <Link to = "/contact"
                className = "btn btn-light">Contact</Link>
             </div>
        </div>
    </div>
  );
};

export default Heroimg;