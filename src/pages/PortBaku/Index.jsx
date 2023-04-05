import React from "react";
import "./Style.css";
const Index = () => {
  return (
    <div>
      <div className="home-page">
        <div className="shop-dine">
          <div className="shop-side">
            <a href="#">
              <h3>Shop</h3>
            </a>
          </div>
          <div className="dine-side">
            <a href="#">
              <h3>Dine</h3>
            </a>
          </div>
        </div>
        <div className="news-events container">
          <div className="head">
            <div className="empty"></div>
            <h2>News & Events</h2>
            <div className="empty"></div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
