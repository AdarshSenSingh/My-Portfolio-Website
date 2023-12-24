import { Link } from "react-router-dom";
import "./Pricingcards.css";
import React from 'react'


const Pricingcards = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>-Basic-</h3>
                <span className="bar"></span>
                <p className="btc"> ₹ 1000</p>
                <p>- 3 Days -</p>
                <p>- 3 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Designe-</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
            </div>

            <div className="card">
                <h3>-Premium-</h3>
                <span className="bar"></span>
                <p className="btc"> ₹ 2000 </p>
                <p>- 2 Days -</p>
                <p>- 5 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Designe-</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
            </div>

            <div className="card">
                <h3>-Business-</h3>
                <span className="bar"></span>
                <p className="btc"> ₹ 3000 </p>
                <p>- 5 Days -</p>
                <p>- 8 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Designe-</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
            </div>
        </div>
    </div>
  )
}

export default Pricingcards;