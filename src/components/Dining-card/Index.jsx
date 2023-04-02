import React from "react";
import style from "./Style.css";
import Img1 from "../../images/alice-resturant.webp";
const Index = (props) => {
  return (
    <div>
      <div className="card" style={{backgroundColor: props.BackgroundColor}}>
        <a href="#">
          <img src={props.Photosrc} alt={props.Photoalt} />
          <p>
            <a href="#">Read More</a>
          </p>
        </a>
      </div>
    </div>
  );
};

export default Index;
