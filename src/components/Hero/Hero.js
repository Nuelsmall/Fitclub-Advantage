import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import { motion } from "framer-motion";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

const transition = {type: 'string', duration : 3};

export const Hero = () => {
  return (
    <div className="hero">
      <div className="blur hero-blur" ></div>
      <div className="left-sideHero">
        <Header />
        {/* The best ad section */}
        <div className="best-ad">
          <motion.div
          initial ={{left: '238px'}}
          whileInView={{left: '8px'}}
          transition={{...transition, type: 'tween'}}
          ></motion.div>
          <span>The best fitness club in the town</span>
        </div>

        {/* Hero text section */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>
            <span> Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div><span>In here we will help you to shape and build. 
            Take the chance to live up your life to your expectation</span></div>
        </div>

        {/* figures section */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>Expert coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>Fitness program</span>
          </div>
        </div>

        {/* Hero buttons */}
        <div className="hero-buttons" >
            <button className="btn" >Get Started</button>
            <button className="btn" >Learn More</button>
        </div>
      </div>
      {/* right side of the hero */}
      <div className="right-sideHero">
        <button className="btn" >Join Now</button>

        <motion.div
        initial={{right: "-1rem"}}
        whileInView={{right: "4rem "}}
        transition={transition}
        className="heart-rate">
          <img src={heart} alt="" />
          <span>Heart rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero images */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
        initial={{right: "11rem"}}
        whileInView={{right: "20rem"}}
        transition={transition}
        src={hero_image_back} alt="" className="hero-image-back" />

        {/* calories section */}
        <motion.div
        initial={{right: "37rem"}}
        whileInView={{right: "28rem"}}
        transition={transition}
        className="calories">
          <img src={Calories} alt="" />
          <div>
          <span>Calories Burned</span>
          <span>220 Kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
