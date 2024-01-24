import { useRef } from "react";
import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.css';



function Hero() {
    return (
      <div className="hero-section">
        
        
        <video src='/videos/herovideo.mp4' type="video/mp4" autoPlay loop muted />
        
       
    <div class="content">
        <h1>Welcome</h1>
        <img src="/img/skyscout.png" alt="logo" width="500px" ></img>
        <h3>I'm an aerial drone videographer based in Norwich</h3>

        <button class="btn btn-outline-light ">Get in touch</button>
      </div>
      </div>



        );
}

export default Hero;