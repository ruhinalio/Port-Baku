import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// style
import "./Style.css";
// components
import WhiteBtn from "../../components/Button-white/Index";
import Footer from "../../components/Footer/Index";

const Index = () => {
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
            <Tab>
              <h2 className="tab-name">Location</h2>
            </Tab>
            <Tab>
              <h2 className="tab-name">News</h2>
            </Tab>
            <div className="empty-margin"></div>
          </TabList>

          <TabPanel>
            <div className="location">
              <div className="location-top">
                <h2>
                  {" "}
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
            <div className="news-side">
              <div className="news-side-row">
                <div className="news-side-card">
                  <img
                    src="https://portbakumall.az/resized/fit463x300/center/pages/194/resized.jpg"
                    alt=""
                  />
                  <h4>
                    Feel the Arrival of Spring at Port Baku Shopping Center
                  </h4>
                  <p>
                    From March 21-23, Port Baku Mall welcomes its visitors with
                    a festive atmosphere.
                  </p>
                  <WhiteBtn text="More news" />
                </div>
                <div className="news-side-card">
                  <img
                    src="https://portbakumall.az/resized/fit463x300/center/pages/194/resized.jpg"
                    alt=""
                  />
                  <h4>
                    Feel the Arrival of Spring at Port Baku Shopping Center
                  </h4>
                  <p>
                    From March 21-23, Port Baku Mall welcomes its visitors with
                    a festive atmosphere.
                  </p>
                  <WhiteBtn text="More news" />
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
