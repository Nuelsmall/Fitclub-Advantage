import React from "react";
import "./Reasons.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import addidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

const Reasons = () => {
  return (
    <div className="Reasons" id="Reasons">
      <div className="R-left">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="R-right">
        <span>some reasons</span>

        <div>
          <span className="stroke-text">Why</span>
          <span>Choose Us?</span>

          <div className="details-R">
            <div>
              <img src={tick} alt="" />
              <span>OVER 149+ EXPERT COACHES</span>
            </div>
            <div>
              <img src={tick} alt="" />
              <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
            </div>
            <div>
              <img src={tick} alt="" />
              <span>1 FREE PROGRAM FOR NEW MEMBERS</span>
            </div>
            <div>
              <img src={tick} alt="" />
              <span>RELIABLE PARTNERS</span>
            </div>
          </div>
        </div>
        <span
          style={{ color: "gray", fontWeight: "normal", fontSize: "1.5rem" }}
        >
          OUR PARTNERS
        </span>

        <div className="partners">
          <img src={nb} alt=""/>
          <img src={addidas} alt=""/>
          <img src={nike} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
