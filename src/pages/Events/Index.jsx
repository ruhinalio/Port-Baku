import React from "react";
import { NavLink } from "react-router-dom";
import Xeberler from "../../components/News-Rezerved/MenuEvents";
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
            <NavLink to="/events" className="active">
              Events
            </NavLink>
            <NavLink to="/events/rezerved">Reserved</NavLink>
          </div>
          <div className="event-side">
            <div className="events-card-row">
              <div className="evend-side-card">
                <img
                  src="https://portbakumall.az/resized/fit463x300/center/pages/27/custom-resized-3ca1ee2a-87f5-410a-b1a5-2f5280d0323c.jpg"
                  alt=""
                />
                <h4>National Costume Exhibition at Port Baku</h4>
                <p>
                  On the eve of Novruz Bayram, an exhibition featuring
                  imitations of ancient traditional women's national costumes
                  from the Karabakh region is being held at the Port Baku Mall.
                </p>
                <WhiteBtn text="Read More" />
              </div>
              <div className="evend-side-card">
                <img
                  src="https://portbakumall.az/resized/fit463x300/center/pages/27/custom-resized-3ca1ee2a-87f5-410a-b1a5-2f5280d0323c.jpg"
                  alt=""
                />
                <h4>National Costume Exhibition at Port Baku</h4>
                <p>
                  On the eve of Novruz Bayram, an exhibition featuring
                  imitations of ancient traditional women's national costumes
                  from the Karabakh region is being held at the Port Baku Mall.
                </p>
                <WhiteBtn text="Read More" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
