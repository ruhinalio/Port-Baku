import React from "react";
// style file is here
import style from "./Style.css";
// components is here
import DiningCard from "../../components/Dining-card/Index";
import ButtonWhite from "../../components/Button-white/Index"
import Footer from "../../components/Footer/Index"
// dining photos is here
import PhotoDining1 from "../../images/alice-resturant.webp"
import PhotoDining2 from "../../images/baccanale-resturant.webp"
import PhotoDining3 from "../../images/cake-resturant.webp"
import PhotoDining4 from "../../images/gloria-resturant.webp"
import PhotoDining5 from "../../images/emporium-resturant.webp"
import PhotoDining6 from "../../images/house-resturant.webp"
import PhotoDining7 from "../../images/paul-resturant.webp"
import PhotoDining8 from "../../images/pivnaya-resturant.webp"
import PhotoDining9 from "../../images/second-resturant.webp"
import PhotoDining10 from "../../images/starbucks-resturant.webp"
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
      <div className="dining-cards container">
        <div className="dining-row">
        <DiningCard 
        Photosrc={PhotoDining1}
        Photoalt= "Alice Resturant"
        BackgroundColor='#c9af77'
        />
        <DiningCard 
        Photosrc={PhotoDining2}
        Photoalt= "Baccanale"
        BackgroundColor='#fff'
        />
        <DiningCard 
        Photosrc={PhotoDining3}
        Photoalt= "Cake resturant"
        BackgroundColor='#c9af77'
        />
        <DiningCard 
        Photosrc={PhotoDining4}
        Photoalt= "Dining resturant"
        BackgroundColor='#fff'
        />
        </div>
        <div className="dining-row">
        <DiningCard 
        Photosrc={PhotoDining5}
        Photoalt= "Emporium resturant"
        BackgroundColor='#fff'
        />
        <DiningCard 
        Photosrc={PhotoDining6}
        Photoalt= "House resturant"
        BackgroundColor='#c9af77'
        />
         <DiningCard 
        Photosrc={PhotoDining7}
        Photoalt= "Paul resturant"
        BackgroundColor='#fff'
        />
         <DiningCard 
        Photosrc={PhotoDining8}
        Photoalt= "Pivnaya resturant"
        BackgroundColor='#c9af77'
        />
        </div>
        <div className="dining-row">
        <DiningCard 
        Photosrc={PhotoDining9}
        Photoalt= "Second Resturant"
        BackgroundColor='#c9af77'
        />
        <DiningCard 
        Photosrc={PhotoDining10}
        Photoalt= "Starbucks Resturant"
        BackgroundColor='#fff'
        />
        </div>
        <div className="button-side">
      <ButtonWhite
      text="for reserved"/>

      </div>
     <Footer/>

      </div>
    </div>
  );
};

export default index;
