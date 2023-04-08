import React from "react";
import WhiteBtn from "../Button-white/Index";
const News = () => {
  return (
    <div className="events">
      <div className="events-card-row">
        <div className="evend-side-card">
          <img
            src="https://portbakumall.az/resized/fit463x300/center/pages/194/resized.jpg"
            alt=""
          />
          <h4>Feel the Arrival of Spring at Port Baku Shopping Center</h4>
          <p>
            From March 21-23, Port Baku Mall welcomes its visitors with a
            festive atmosphere.
          </p>
          <WhiteBtn text="Read More" />
        </div>
        <div className="evend-side-card">
          <img
            src="https://portbakumall.az/resized/fit463x300/center/pages/195/asdfghjk.jpg"
            alt=""
          />
          <h4>Jacadi Children's Festival</h4>
          <p>
            On March 18, a children's entertainment event was organized at the
            Jacadi store located on the top floor of Port Baku Mall.
          </p>
          <WhiteBtn text="Read More" />
        </div>
      </div>
      <div className="events-card-row">
        <div className="evend-side-card">
          <img
            src="https://portbakumall.az/resized/fit463x300/center/pages/27/custom-resized-3ca1ee2a-87f5-410a-b1a5-2f5280d0323c.jpg"
            alt=""
          />
          <h4>National Costume Exhibition at Port Baku</h4>
          <p>
            On the eve of Novruz Bayram, an exhibition featuring imitations of
            ancient traditional women's national costumes from the Karabakh
            region is being held at the Port Baku Mall.
          </p>
          <WhiteBtn text="Read More" />
        </div>
      </div>
    </div>
  );
};

const Reserved = () => {
  return (
    <div className="events">
     
      <div className="events-card-row">
        <div className="evend-side-card">
          <img
            src="https://portbakumall.az/resized/fit463x300/center/pages/27/custom-resized-3ca1ee2a-87f5-410a-b1a5-2f5280d0323c.jpg"
            alt=""
          />
          <h4>National Costume Exhibition at Port Baku</h4>
          <p>
            On the eve of Novruz Bayram, an exhibition featuring imitations of
            ancient traditional women's national costumes from the Karabakh
            region is being held at the Port Baku Mall.
          </p>
          <WhiteBtn text="Read More" />
        </div>
      </div>
    </div>
  );
};

export { News, Reserved };
