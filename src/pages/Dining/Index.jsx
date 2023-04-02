import React from "react";
// style file is here
import style from "./Style.css";
// components is here
import DiningCard from "../../components/Dining-card/Index";
// dining photos is here
import PhotoDining1 from "../../images/alice-resturant.webp"
const index = () => {
  return (
    <div>
      <div className="top-side">
        <div className="content">
          <h2>DINING</h2>
          <p>Savor the culinary pleasures of our restaurants and cafeterias</p>
        </div>
      </div>
      <div className="brand">
        <div className="box"></div>
        <h2>All brands</h2>
        <div className="box"></div>
      </div>
      <div className="dining-cards">
        <DiningCard 
        Photosrc={PhotoDining1}
        Photoalt= "Alice Resturant"
        BackgroundColor='#c9af77'
        />
      </div>
    </div>
  );
};

export default index;
