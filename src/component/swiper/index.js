import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import array from './data';
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Keyboard,  Navigation  } from "swiper/modules";



const Swipers = () => {
  return (
    <Container>
      <div className="p-5 pb-0">
        <h1>Our Products</h1>
        <p>Popular Residences</p>
      </div>
      <div className="p-2" style={{ position: "relative" }}>
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }}
          scrollbar={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Navigation]}
          className="mySwiper p-5"
        >
          {array.map((item, key) => (
            <SwiperSlide key={key}>
              <div className="image_div p-2">
                <img src={item.image} alt={`${"image" + key}`} />
                <div className="d-flex p-2 price"><span className="dollar">$ &nbsp;</span> {item.price}</div>
                <div className="p-2 price heading">{item.heading}</div>
                <div className="p-2">{item.about}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

const Container = styled.div`
  div h1 {
    color: #ffa814;
    font-size: 1.7rem;
    font-weight: 900;
    font-family: Poppins;
  }
  div p {
    color: #1f3e72;
    font-size: 2.4rem;
    font-weight: 700;
    font-family: Poppins;
  }
  .image_div {
    border-radius: 1rem;
    transition: 0.5s ease-in-out;
  }
  .image_div:hover {
    transform: scale(1.05);
    background-color: #f3f9fe;
    background-image: -webkit-linear-gradient(358deg, #f3f9fe 0%, #ffffff 100%);
    background-image: -moz-linear-gradient(358deg, #f3f9fe 0%, #ffffff 100%);
    background-image: -o-linear-gradient(358deg, #f3f9fe 0%, #ffffff 100%);
    background-image: linear-gradient(358deg, #f3f9fe 0%, #ffffff 100%);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
  }
  .dollar {
    font-size: 1.3rem;
    color: #ffa814;
    font-weight: 700;
  }
  .price {
    font-size: 1.3rem;
    font-family: Poppins;
  }
  .heading {
    color: #1f3e72;
    font-weight: 900;
  }
`;

export default Swipers;
