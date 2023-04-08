import React from "react";
import { NavLink } from "react-router-dom";
import Xeberler from "../../components/News-Rezerved/MenuEvents"
import "./Style.css";
//components
import Header from "../../components/Header/Index";
import Footer from "../../components/Footer/Index";
import WhiteBtn from "../../components/Button-white/Index";
const Index = () => {
  return (
    <div>
      <Header />
      <div className="body-events">
        <div className="header-events">
          <h2>EXTRAORDINARY EVENTS AND CELEBRATIONS</h2>
          <p>
            With a full calendar of seasonal celebrations, activities and
            special events for the whole family, there's always something to see
            and do.
          </p>
        </div>
        <div className="body-events">
          <div className="actions-events">
            <NavLink to="/events" className="active">Events</NavLink>
            <NavLink to="/events/rezerved">Reserved</NavLink>
          </div>
          <Xeberler/>

        
        </div>
      </div>
      <div className="container">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
