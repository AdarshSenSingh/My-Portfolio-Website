import React from 'react';
import "./Footer.css";
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";



const Footer = () => {
  return (
    <div className="footer">
       <div className="footer-container">
        <div className="left">
          <div className="location">
          <FaHome size={20} style={{color:"#fff",marginRight :"2rem" }}/>
          <div>
            <p>123 Housing Society</p>
            <p>Bangladesh</p>
          </div>
          </div>

          <div className="phone">
            <h4>
            <FaPhone size={20} style= {{color:"#fff",marginRight:"2rem"}}/>
           +91-9140662764
           
            </h4>
            <br />
           
          </div>
          <h4>
            <FaMailBulk size={20} style= {{color:"#fff",marginRight:"2rem"}}/>
           bhupatgms@gmail.com
            </h4>

        </div>
        <div className="right">
          <h4>About the company</h4>
          <p>This is Adarsh Sen Singh,  a Blockchain developer ,   started my journey in field of development .  I am happy to share my experiences, new projects and design challenges.</p>
          <h4>
            <FaFacebook size={30}
            style={{color: "#fff",marginRight: "1rem"}}/>
          
            <FaTwitter size={30}
            style={{color: "#fff",marginRight: "1rem"}}/>
          
            <FaLinkedin size={30}
            style={{color: "#fff",marginRight: "1rem"}}/>
          </h4>


        </div>
        
       </div>

    </div>
  )
}

export default Footer;