import "./Workcard.css";
import React from 'react'
import Pro1 from "../assets/images/cover-React.js.png";
import { NavLink } from "react-router-dom";

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">
            Projects
            </h1>
            <div className="project-container">
            <div className="project-card">
                <img src={Pro1} alt="image" />
              <h2 className="project-tittle">Project Title</h2>
              <div className="pro-details">
                <p>this is text</p>
                <div className="pro-btns"> 
            <NavLink to="url.com" className="btn">
                View
            </NavLink>
                </div>
                <NavLink to="url.com" className="btn">
                Sources
            </NavLink>
              </div>
            </div>
            </div>
        </div>
 
  );
};

export default Work;