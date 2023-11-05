import styled from "styled-components";
import image from "./hero.png";
import CountUp from "react-countup";


const Hero = () => {
  return (
    <Container className=" pb-5">
      <div className="container">
        <div className="row">
          <div className="left_section p-5 text-white col-lg-5">
            <h1>Discover Most Suitable Property</h1>
            <p>
              Find a variety of properties that suit you very easilty Forget all
              difficulties in finding a residence for you
            </p>
            <form className="d-flex bg-white  p-3">
              <span className="d-flex justify-content-center align-items-center">
                <i class="fa-solid fa-location-pin"></i>
              </span>
              <input type="text" />
              <button>Search</button>
            </form>
            <div className="row pt-4 count">
              <div className="col-4">
                <CountUp start={10} end={520} delay={0} duration={5}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} style={{fontFamily: 'Poppins'}}/> <span className="plus">+</span>
                      <div
                        className="text-white"
                        style={{ fontSize: "0.6rem" }}
                      >
                        Total Client
                      </div>
                    </div>
                  )}
                </CountUp>
              </div>
              <div className="col-4">
                <CountUp start={10} end={672} delay={0} duration={3}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} style={{fontFamily: 'Poppins'}}/> <span className="plus">+</span>
                      <div
                        className="text-white"
                        style={{ fontSize: "0.6rem" }}
                      >
                        Happy Client
                      </div>
                    </div>
                  )}
                </CountUp>
              </div>
              <div className="col-4">
                <CountUp start={10} end={32} delay={0} duration={4}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} style={{fontFamily: 'Poppins'}}/> <span className="plus">+</span>
                      <div
                        className="text-white"
                        style={{ fontSize: "0.6rem" }}
                      >
                        Total Projects
                      </div>
                    </div>
                  )}
                </CountUp>
              </div>
            </div>
          </div>
          <div className="right_section p-3  col-lg-7">
            <img src={image} alt="hero_img" />
            <h4 className="text-center">Collection of best properties</h4>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: auto;
  background-color: #131110;
  display: flex;
  .left_section h1 {
    margin-top: 1rem;
    z-index: 1;
    height: auto;
    font-size: 3.6rem;
    position: relative;
  }
  .left_section h1:after {
    content: "";
    position: absolute;
    top: -1.3rem;
    left: -1.2rem;
    z-index: -1;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background: #ffc48b;
  }
  .left_section p {
    margin-top: 1rem;
    color: lightgrey;
  }
  .left_section form {
    width: 100%;
    border-radius: 8px;
  }
  .left_section form button {
    background: #2f50d4;
    border-radius: 5px;
    width: 100px;
    height: 30px;
    border: none;
    color: white;
    text-align: center;
    transition: 0.5s ease-in-out;
  }
  .left_section form button:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
  .left_section input {
    border: none;
    width: 100%;
    font-size: 1.3rem;
    padding: 0 15px;
    background: none;
    outline: none; /* Removes the focus outline */
  }
  .fa-location-pin {
    color: blue;
    font-size: 25px;
  }
  .right_section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    margin-top: 2rem;
    flex-direction: column;
  }
  .right_section img {
    width: 80%;
    border-radius: 50% 50% 3px 3px;
    height: 350px;
    position: relative;
    z-index: 1;
  }
  .right_section img::after{
    content: "";
    top: -23%;
    z-index: -1;
    height: 200px; 
    width: 200px; 
    position: absolute;
    border-radius: 50%;
    background: blue;
  }
  .right_section h4 {
    color: white;
    font-family: Poppins;
    font-size: 2rem;
    font-weight: 900;
    z-index: 1;
    position: relative;
  }
  .right_section h4:after {
    content: "";
    position: absolute;
    height: 70px;
    width: 70px;
    z-index: -1;
    background-color: #2f50d4;
    border-radius: 50%;
    right: 0%;
    top: -1rem;
  }
  .count div {
    font-size: 2rem;
    font-weight: 800;
  }
  .plus {
    color: yellow;
    font-size: 2rem;
  }
  @media screen and (max-width: 780px) {
    .left_section h1 {
      font-size: 2.5rem;
    }
    .left_section p {
      font-size: 0.7rem;
    }
    .right_section img {
      height: 250px;
      width: 85%;
      margin-top: 0px;
    }
    .right_section {
      margin-top: 0px;
      padding-top: 0px;
    }
  }
`;

export default Hero;
