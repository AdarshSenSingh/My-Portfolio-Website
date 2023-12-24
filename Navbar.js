import "./Navbar.css";
import React ,{useState} from 'react';
import {Link} from "react-router-dom";
import {FaBars,FaTimes} from "react-icons/fa";
/*this fun used to when click on the menu it shows the options*/
const Navbar = () => {
    const [click,setClick]=useState(false);
    const handleClick= ()=> setClick(!click);
const [color,setColor]= useState(false);
const changeColor=()=>{
    if(window.scrollY>=1){
        setColor(true);
    }else{
        setColor(false);
    }
};


  return (
    <div className={color ?"header header-bg" :
    "header"}>
        <Link to="/">
            <h1>My Portfolio</h1>
        </Link>
        <ul className={click ?"nav-menu active":"nav-menu"}>
            <li>
                <Link to = "/">Home</Link>
            </li>
            <li>
                <Link to = "/project">Project</Link>
            </li>
            <li>
                <Link to = "/about">About</Link>
            </li>
            <li>
                <Link to = "/contact">Contact</Link>
            </li>
           
        </ul>
        {/* /* /*this function is used to provide option of either menu or cross*/  }
        <div className="hamburger" onClick={handleClick}>
            {click ? (
                 <FaTimes size={20} style={{color: "#fff"}
                }/>
            ): <FaBars size={20} style={{color: "#fff"}
        }/>
        }
        
            
              
           </div>
    </div>
  )
}

export default Navbar;