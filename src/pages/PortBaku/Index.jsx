import React from "react";

// style is here
import "./Style.css";
// components is here
import Footer from "../../components/Footer/Index";
import CardLeft from "../../components/Card-left-img/Index";
import CardRight from "../../components/Card-right-img/Index";
import DiningCard from "../../components/Dining-card/Index";
import WhiteBtn from "../../components/Button-white/Index";
// images and videos is here
import Video1 from "../../videos/pb-video.mp4";
import News1 from "../../images/news-img/baby-girl.jpg";
import News2 from "../../images/news-img/national-girl.webp";
import News3 from "../../images/news-img/news-girl.webp";
import Sekil1 from "../../images/dininig-cover.webp";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Index = () => {
  return (
    <div>
      <div className="home-page">
        <div className="header-side">
          <video src={Video1} muted autoPlay loop></video>
        </div>
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
          <div className="body">
            <CardLeft
              ImageSrc={News1}
              NewsHead="FASHION AVENUE"
              NewsName="Jacadi Children's Festival"
              NewsContent="
            On March 18, a children's entertainment event was organized at the Jacadi store located on the top floor of Port Baku Mall.
        "
            />
            <CardRight
              ImageSrc={News2}
              NewsHead="FASHION AVENUE"
              NewsName="Jacadi Children's Festival"
              NewsContent="
           On March 18, a children's entertainment event was organized at the Jacadi store located on the top floor of Port Baku Mall.
       "
            />
            <CardLeft
              ImageSrc={News3}
              NewsHead="FASHION AVENUE"
              NewsName="Jacadi Children's Festival"
              NewsContent="
            On March 18, a children's entertainment event was organized at the Jacadi store located on the top floor of Port Baku Mall.
        "
            />
          </div>
          <div className="brand-side">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={10}
              slidesPerView={4}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: false }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <DiningCard
                  BackgroundColor="#fff"
                  Photosrc="https://portbakumall.az/resized/resize200/center/pages/84/amazon-lingerie.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <DiningCard
                  BackgroundColor="#fff"
                  Photosrc="https://portbakumall.az/resized/resize200/center/pages/113/aloe.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <DiningCard
                  BackgroundColor="#fff"
                  Photosrc="https://portbakumall.az/resized/resize200/center/pages/61/mcqueen.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <DiningCard
                  BackgroundColor="#fff"
                  Photosrc="https://portbakumall.az/resized/resize200/center/pages/130/baldini.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <DiningCard
                  BackgroundColor="#fff"
                  Photosrc="https://portbakumall.az/resized/resize200/center/pages/73/balenciaga.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <DiningCard
                  BackgroundColor="#fff"
                  Photosrc="https://portbakumall.az/resized/resize200/center/pages/77/bally.png"
                />
              </SwiperSlide>
            </Swiper>
            <div className="button">
              <WhiteBtn text="all brands" />
            </div>
          </div>

          <div className="footer-is">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
