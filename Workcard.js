import "./Workcard.css";
import React from 'react'
import Pro1 from "../assets/images/cover-React.js.png";
import { NavLink } from "react-router-dom";

const Workcard = (props) => {
  return (
    <div className="work-container">
        <h1 className="project-heading">
            Projects
            </h1>
            <div className="project-container">
            <div className="project-card">
                <img src={props.Imgsrc} alt="image" />
              <h2 className="project-tittle">Project Title</h2>
              <div className="pro-details">
                <p>this is text</p>
                <div className="pro-btns"> 
            <NavLink to="url.com" className="btn">
                View
            </NavLink>
              
                <NavLink to="url.com" className="btn">
                Sources
            </NavLink>
            </div>
              </div>
            </div>
            </div>
        </div>
 
  );
};

export default Workcard;