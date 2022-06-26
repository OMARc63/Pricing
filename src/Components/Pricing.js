import React , { useState } from "react";
import './Pricing.css';
import top from '../images/bg-top.svg';
import bottom from '../images/bg-bottom.svg';

function Pricing () {

  const [toggle, setToggle] = useState(false)

    return (
      <div className="Pricing">
        <div className="design1">
          <img src={top} />
        </div>
        <div className="design2">
          <img src={bottom} />
        </div>
        <div className="container">

          <div className="Pricing-head">
            <h1>Our Pricing</h1>
            <span>Annually</span>
            <label className="switch" >
              <input type="checkbox" onClick={()=>setToggle(!toggle)} />
              <span className="slider"></span>
            </label>
            <span>Monthly</span>          
          </div>

          <div className="Pricing-content"> 
            <div className="box">
              <p className="box-title">Basic</p>
              <p className="box-price">&#36;<span>{toggle?19.99:199.99}</span></p>
              <div className="box-desc">
                <span>500 GB Storage</span>
                <span>2 Users Allowed</span>
                <span>Send up to 3 GB</span>
              </div>
              <button>Learn More</button>
            </div>
            <div className="box">
              <p className="box-title">Professional</p>
              <p className="box-price">&#36;<span>{toggle?24.99:249.99}</span></p>
              <div className="box-desc">
                <span>1 TB Storage</span>
                <span>5 Users Allowed</span>
                <span>Send up to 10 GB</span>
              </div>
              <button>Learn More</button>
            </div>
            <div className="box">
              <p className="box-title">Master</p>
              <p className="box-price">&#36;<span>{toggle?39.99:399.99}</span></p>
              <div className="box-desc">
                <span>2 TB Storage</span>
                <span>10 Users Allowed</span>
                <span>Send up to 20 GB</span>
              </div>
              <button>Learn More</button>
            </div>
          </div>
        </div>
              {console.log("run")}
      </div>
    )
  
}

export default Pricing;