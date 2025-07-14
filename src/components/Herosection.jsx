import React from "react";

function Herosection() {
  return (
    <div className="herosection">
      <div className="herocontent">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p className="p">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="herobtn">
            <button className="shopping">Shop Now</button>
            <button className="category">Category</button>
        </div>
        <div className="link">
            <p>Also Available On</p>
        </div>
        <div className="logo">
             <img src="/images/amazon.png" alt="flipkart"/>
            <img src="/images/flipkart.png" alt="flipkart"/>
        </div>
      </div>
      <div className="heroimage">
        <img src="/images/shoe_image.png" alt="heroimage" />
      </div>
    </div>
  );
}

export default Herosection;
