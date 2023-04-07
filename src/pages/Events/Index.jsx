import React from "react";
import "./Style.css";
//components
import Header from "../../components/Header/Index";
import Footer from "../../components/Footer/Index";
const Index = () => {
  return (
    <div>
      <Header />
      <div className="body-events">
         <div className="header-events">
          <h2>EXTRAORDINARY EVENTS AND CELEBRATIONS</h2>
          <p>With a full calendar of seasonal celebrations, activities and special events for the whole family, there's always something to see and  do.</p>
         </div>
      </div>
      <div className="container">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
