import React from "react";
import { useState, useEffect } from "react";
import Style from "./Style.css";
import { BiMessageSquareDetail, BiRightArrowAlt } from "react-icons/bi";
import { BsFacebook, BsInstagram } from "react-icons/bs";
const Index = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  function Popup() {
    const [showPopup, setShowPopup] = useState(false);

    const handleShow = () => {
      setShowPopup(true);
    };

    const handleClose = () => {
      setShowPopup(false);
    };

    useEffect(() => {
      let timer;
      if (showPopup) {
        timer = setTimeout(() => {
          handleClose();
        }, 3000);
      }
      return () => clearTimeout(timer);
    }, [showPopup]);

    return (
      <div>
        <button className="send" onClick={handleShow}>
          <BiRightArrowAlt />
        </button>
        {showPopup && (
          <div className="popup">
            <div className="popup__content">
              <p>Sent!</p>
            </div>
          </div>
        )}
      </div>
    );
  }
  return (
    <footer className="footer">
      {/* <hr /> */}
      <div className="black-line">
        <div className="text">
          <div className="icon-ms">
            <BiMessageSquareDetail />
          </div>

          <p>
            Sign up for our newsletter to receive special offers, news and
            events
          </p>
        </div>
        <div className="import">
          <input
            type="text"
            placeholder="first name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="last name"
            id="name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />

          <Popup />
        </div>
      </div>
      <div className="footer-side">
        <div className="footer-side-left">
          <ul className="contact">
            {/* <li><h3>Contact</h3></li> */}
            <li>info@portbakumall.az</li>
            <li>+994 12 599 00 97</li>
            <li>+994 12 599 00 98</li>
          </ul>
        </div>
        <div className="footer-side-center-left">
          <ul className="social">
            <li>
              <a href="#">
                <BsFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <BsInstagram />
              </a>
            </li>
          </ul>
          <div className="opening">
            <ul>
              <li>Opening time</li>
              <li>All day: 10:00-23:00</li>
            </ul>
          </div>
        </div>
        <div className="footer-side-center-right">
          <ul>
            <li>
              <h3>Information</h3>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Mall Map</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Cookies Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-side-right">
          <ul>
            <li>
              <h3>Menu</h3>
            </li>
            <li>
              <a href="#">Shop Brands</a>
            </li>
            <li>
              <a href="#">Dine & Drink</a>
            </li>
            <li>
              <a href="#">News & Events</a>
            </li>
            <li>
              <a href="#">Port Baku Magazine</a>
            </li>
            <li>
              <a href="#">Leasing</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Index;
