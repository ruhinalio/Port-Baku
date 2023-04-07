import React from "react";
import "./Style.css";
// components
import Button from "../Button-white/Index";
import TestImg from "../../images/news-img/baby-girl.jpg";
const Index = (props) => {
  return (
    <div className="img-left ">
      <div className="left-side">
        <img src={props.ImageSrc} alt="" />
      </div>
      <div className="right-side">
        <h4>{props.NewsHead}</h4>
        <h2>{props.NewsName}</h2>
        <p>{props.NewsContent}</p>
        <Button text="Read More" />
      </div>
    </div>
  );
};

export default Index;
