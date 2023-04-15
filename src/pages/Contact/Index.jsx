import React from "react";
import {useState,useEffect } from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { BiMessageSquareDetail, BiRightArrowAlt } from "react-icons/bi";

import "react-tabs/style/react-tabs.css";
// style
// import "./Style.css";
// components
import WhiteBtn from "../../components/Button-white/Index";
import Footer from "../../components/Footer/Index";

const Index = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('')
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
          Send!
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
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };
  return (
    <div>
      <div className="contact-header">
        <h2>Contact</h2>
        <p></p>
      </div>
      <div className="tabs-side container">
        <Tabs>
          <TabList className="test">
            <div className="empty-margin"></div>
            <Tab className="tab-name">
              <h2 className="tab-name">Contact</h2>
            </Tab>
            <Tab className="tab-name">
              <h2 className="tab-name">Reserved</h2>
            </Tab>
            <div className="empty-margin"></div>
          </TabList>

          <TabPanel>
            <div className="location">
              <div className="location-top">
                <h2>
                  <span>phone</span>+994 12 599 00 97
                </h2>
                <h2>
                  <span>adress:</span>PORT BAKU MALL 151 NEFTCHILAR AV. BAKU,
                  AZERBAIJAN
                </h2>
                <div className="location-side">
                  <iframe
                    width="900"
                    height="500"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?width=900&amp;height=500&amp;hl=en&amp;q=Port%20Baku%20Mall%20Baku+(Port%20Baku)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe>
                  <a href="https://maps-generator.com/"></a>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <form action="#" onSubmit={handleSubmit}>
              <div className="form-left-side">
                <div className="name-side form-side">
                  <h4>Full Name</h4>
                  <input type="text" 
                   id="name"
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                   required
                  />
         

                </div>
                <div className="number-side form-side">
                  <h4>Phone Number</h4>
                  <input type="number" 
                  id="number"
                  value={number}
                  onChange= {(e)=>setNumber(e.target.value)}
                  required
                  />
                 
                </div>
                <div className="hall-side form-side">
                  <h4>Select the hall</h4>
                  <select name="hall" id="reserved-hall">
                    <option value="select">Select the hall</option>
                    <option value="entry">Entry hall</option>
                    <option value="center">Center hall</option>
                    <option value="emporium">Emporium</option>
                    <option value="paul">Paul</option>
                  </select>
                </div>
              </div>
              <div className="form-right-side">
                <div className="email-side form-side">
                  <h4>Email</h4>
                  <input type="email" 
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  />
                </div>
                <div className="date-side form-side">
                  <h4>Day</h4>
                  <input type="date" />
                </div>
                <div className="mejjage-side form-side">
                  <h4>Message</h4>
                  <input type="message" />
                </div>
                <div className="button-side form-side">
                <Popup />

                </div>
              </div>
            </form>
          </TabPanel>
        </Tabs>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
