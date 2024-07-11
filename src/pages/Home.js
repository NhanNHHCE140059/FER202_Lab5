import React from "react";
import banner1 from "../images/Banner_1.jpg";
import banner2 from "../images/Banner_2.png";
import banner3 from "../images/Banner_3.png";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";

import { News } from "../news";
import NewEvent from "../components/NewEvent";

function Home() {
  const images = [
    { id: 1, img: banner1 },
    { id: 2, img: banner2 },
    { id: 3, img: banner3 },
  ];

  return (
    <>
      <div className="d-flex align-items-center justify-content-center p-3 bg-dark-blue">
        <h4 className="text-center text-white mb-2 fw-bold">
          PHÒNG QUAN HỆ DOANH NGHIỆP <br />
          ĐẠI HỌC FPT CẦN THƠ
        </h4>
      </div>
      <div className="w-100 h-50 mt-4">
        <Carousel>
          {images.map((item, idx) => (
            <Carousel.Item key={item.id}>
              <img
                className="w-75 mx-auto d-block"
                src={item.img}
                alt={`banner ${idx + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="px-3 py-5 mt-3 news w-100 h-75">
        <h3 className="text-center fw-bold mb-5">TIN TỨC & SỰ KIỆN</h3>

        <div className="d-flex justify-content-center gap-5">
          {News.map((item) => (
            <NewEvent
              key={item.id}
              id={item.id}
              date={item.date}
              title={item.title}
              desc={item.description}
              img={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
