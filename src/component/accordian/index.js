import styled from "styled-components";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

const Accordian = () => {
    return (
      <Container className="p-5">
        <div className="row">
          <div className="col-lg-6 left_section">
            <img
              src="https://real-estate-web.pages.dev/value.png"
              alt="image_1"
            />
          </div>
          <div className="col-lg-6">
            <div>
              <div className="heading_yellow">Our Value</div>
              <div className="heading_blue">Value We Give to You</div>
              <div className="body">
                We always ready to help by providing the best services for you.
                We beleive a good blace to live can make your life better
              </div>
            </div>
            <Accordion className="mt-2">
              <AccordionItem className="accordian_box mt-2" defaultExpanded={true}>
                <AccordionItemHeading className="accordian_heading">
                  <AccordionItemButton>
                    What harsh truths do you prefer to ignore?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem className="accordian_box">
                <AccordionItemHeading className="accordian_heading">
                  <AccordionItemButton>
                    Is free will real or just an illusion?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    In ad velit in ex nostrud dolore cupidatat consectetur ea in
                    ut nostrud velit in irure cillum tempor laboris sed
                    adipisicing eu esse duis nulla non.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem className="accordian_box">
                <AccordionItemHeading className="accordian_heading">
                  <AccordionItemButton>
                    Is free will real or just an illusion?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    In ad velit in ex nostrud dolore cupidatat consectetur ea in
                    ut nostrud velit in irure cillum tempor laboris sed
                    adipisicing eu esse duis nulla non.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </Container>
    );
}

const Container = styled.div`
  div .left_section img {
    height: 550px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    width: 75%;
    border-radius: 50% 50% 3px 3px;
    border: 10px solid lightgrey;
  }
  .heading_yellow {
    font-size: 2rem;
    font-weight: 800;
    color: #ffa814;
  }
  .heading_blue {
    font-size: 2.5rem;
    margin-top: 0.3rem;
    font-weight: 900;
    color: #1f3e72;
  }
  .body {
    width: 70%;
    font-family: Poppins;
    padding: 5px;
  }
  .accordian_heading {
    width: 100%;
    background-color: white;
    border-radius: 20px;
  }
  .accordion__button {
    width: 100%;
    background-color: white;
    border-radius: 20px;
    font-size: 1.3rem;
    color: black;
    font-weight: 600;
    box-shadow: inset 15px 15px 100px lightblue;
  }
  .accordion {
    width: 80%;
    border-radius: 20px;
  }
  .accordian_box{
    width: 80%;
    margin: 0.3rem;
    border-radius: 20px;
    box-shadow: inset 3px 3px 20px lightgrey;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
  .accordion__panel{
    font-size: 1rem;
    font-family: Poppins;
  }
  @media screen and (max-width: 900px){
    .accordion {
      width: 100%;
    }
    .accordian_box{
      width: 100%;
    }
    div .left_section{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 1rem;
    }
    div .left_section img{
      width: 100%;
      height: 390px;
      border-radius: 0px;
    }
  }
  `;
  
export default Accordian;