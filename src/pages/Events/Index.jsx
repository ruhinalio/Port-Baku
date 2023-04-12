import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
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
         <div className="header-margin"></div>
          <Tabs className="container">
            <TabList className="test">
              <div className="empty-margin"></div>
              <Tab className="tab-name"><h2 className="tab-name">Events</h2></Tab>
              <Tab className="tab-name"><h2 className="tab-name">News</h2></Tab>
              <div className="empty-margin"></div>
            </TabList>

            <TabPanel>
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
                      imitations of ancient traditional women's national
                      costumes from the Karabakh region is being held at the
                      Port Baku Mall.
                    </p>
                    <WhiteBtn text="Read More" />
                  </div>
                  <div className="evend-side-card">
                    <img
                      src="https://portbakumall.az/resized/fit463x300/center/pages/22/img-2258.jpg"
                      alt=""
                    />
                    <h4>National Costume Exhibition at Port Baku</h4>
                    <p>
                      On the eve of Novruz Bayram, an exhibition featuring
                      imitations of ancient traditional women's national
                      costumes from the Karabakh region is being held at the
                      Port Baku Mall.
                    </p>
                    <WhiteBtn text="Read More" />
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="news-side">
                <div className="news-side-row">
                  <div className="news-side-card">
                    <img src="https://portbakumall.az/resized/fit463x300/center/pages/194/resized.jpg" alt="" />
                    <h4>
                    Feel the Arrival of Spring at Port Baku Shopping Center
                    </h4>
                    <p>From March 21-23, Port Baku Mall welcomes its visitors with a festive atmosphere.</p>
                    <WhiteBtn text="More news"/>
                  </div>
                  <div className="news-side-card">
                    <img src="https://portbakumall.az/resized/fit463x300/center/pages/194/resized.jpg" alt="" />
                    <h4>
                    Feel the Arrival of Spring at Port Baku Shopping Center
                    </h4>
                    <p>From March 21-23, Port Baku Mall welcomes its visitors with a festive atmosphere.</p>
                    <WhiteBtn text="More news"/>
                  </div>
                </div>
              </div>
            </TabPanel>
        <Footer />

          </Tabs>

        </div>
      </div>
     
    </div>
  );
};

export default Index;
