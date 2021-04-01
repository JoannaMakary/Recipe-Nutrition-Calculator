import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Menu from "../core/Menu";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1200,
  easing: "ease-in-out-back",
});

const Homepage = styled.div`
  @media (min-width: 1px) {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  @media (min-width: 1080px) {
    background-color: rgba(0, 0, 0, 0);
  }
`;

const MainText = styled.h1`
  @media (min-width: 1px) {
    font-size: 3rem;
    width: 100%;
    letter-spacing: 1px !important;
    color: #3f4f7c;
    font-weight: 200;
    line-height: 5rem;
    position: fixed;
  }
  @media (min-width: 480px) {
    font-size: 5rem;
  }
`;

const BolderText = styled.h1`
  @media (min-width: 1px) {
    margin-top: 80px;
    font-size: 3rem;
    width: 100%;
    letter-spacing: 1px !important;
    color: #3f4f7c;
    font-weight: 600;
    position: fixed;
  }
  @media (min-width: 480px) {
    font-size: 5rem;
  }
`;

const QuickText = styled.h1`
  @media (min-width: 1px) {
    margin-top: 180px;
    font-size: 3rem;
    width: 100%;
    letter-spacing: 1px !important;
    color: #3f4f7c;
    font-weight: 200;
    line-height: 5rem;
    position: fixed;
  }
  @media (min-width: 480px) {
    font-size: 5rem;
  }
`;

const RecipeCalculator = styled.div`
  @media (min-width: 1px) {
    width: 100%;
    position: relative;
    z-index: 99;
    height: auto;
    background-color: #475581;
    padding-bottom: 5vh;
    color: #f0edf1;
    text-align: center;
    padding: 2rem 2rem 10rem 2rem;
  }
`;

const CalculatorContainer = styled.div`
  @media (min-width: 1px) {
    background-color: rgba(255, 255, 255, 0.2);
    width: 1000px;
    height: auto;
    margin: 0 auto;
    border-radius: 1rem;
    text-align: left;
    padding: 1rem 3rem;
    font-size: 1.5rem;
  }
`;

const NutritionText = styled.h1`
  @media (min-width: 1px) {
    font-size: 3rem;
    width: 100%;
    letter-spacing: 2px !important;
    color: #f0edf1;
    font-weight: 600;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);
    margin-top: 75px;
    margin-bottom: 30px;
  }
  @media (min-width: 480px) {
    font-size: 4rem;
  }
`;

const ErrorMessage = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  left: 0px;
  background-color: rgb(207, 102, 121);
  width: 100%;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  color: black;
  font-weight: 500;
  border: 2px solid #81424d;
`;

const Buttons = styled.div`
  @media (min-width: 1px) {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    margin-top: 310px;
    color: black;
    letter-spacing: 2px;
    font-size: 1.5rem;
    align-items: flex-start;
    display: inline-block;
    padding: 0.5rem 1rem;
    text-decoration: none;
    text-transform: uppercase;
    position: fixed;
    border: 1px solid #3f4f7c;
    text-align: center;
    font-weight: 500;
    vertical-align: middle;
    line-height: 1.5;
    border-radius: 0.5rem;
    transition: 0.3s;
    width: 100%;
    &:hover {
      background-color: #8791ad;
      border: 1px solid #f0edf1;
      color: #f0edf1;
    }
  }
  @media (min-width: 768px) {
    width: auto;
  }
`;

const Projects = styled.div`
  @media (min-width: 1px) {
    width: 100%;
    position: relative;
    z-index: 99;
    height: auto;
    background-color: #1e2338;
    background: linear-gradient(rgb(22, 24, 32), #1e2338);
    color: #f0edf1;
    font-size: 1.2rem;
  }
`;

const Footer = styled.div`
  @media (min-width: 1px) {
    width: 100%;
    position: relative;
    z-index: 99;
    height: 150px;
    background: linear-gradient(#475581, #f0edf1);
    color: black;
    text-align: center;
    padding-top: 50px;
    font-size: 1.2em;
  }
`;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      errorMessage: "",
    };
  }

  render() {
    return (
      <Homepage className="fade-in">
        <a id="backToTopButton"></a>
        {this.state.errorMessage && (
          <ErrorMessage>
            <i className="fas fa-exclamation-circle ml-3 mr-2"></i>{" "}
            {this.state.errorMessage}{" "}
          </ErrorMessage>
        )}
        <Menu />

        <div id="main">
          <div id="main-container" className="row">
            <div className="col">
              <MainText>to calculate</MainText>
              <BolderText>recipe nutrition</BolderText>
              <QuickText>quick & easy</QuickText>
              <Link to="/#contact">
                <Buttons id="contact-btn">START NOW</Buttons>
              </Link>
            </div>
            <div className="col" id="main-image"></div>
          </div>
        </div>
        <RecipeCalculator>
          <NutritionText id="calculator">Nutrition Calculator</NutritionText>
          <CalculatorContainer>
            <div className="row">
              <div className="col">
                <form>
                  <div className="form-group">
                    <label>Recipe Name (Optional)</label>
                    <input
                      type="text"
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Enter Recipe Name (ex. Cupcakes)"
                    />
                  </div>
                  <div className="form-group">
                    <label>Ingredient(s)</label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="12"
                      placeholder="Enter Recipe Ingredients&#10;Use any metric units and separate by new line OR commas&#10;(ex. 1 cup sugar, 100g flour)"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label>Serving Size</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Serving Size"
                    />
                  </div>
                  <button
                    id="analyze-btn"
                    type="submit"
                    className="btn btn-primary"
                  >
                    ANALYZE RECIPE
                  </button>
                </form>
              </div>
              <div id="results" className="col">
                Results
                <br />
                <span style={{ fontSize: "1rem" }}>
                  Calculated nutrition will be displayed here.
                </span>
              </div>
            </div>
          </CalculatorContainer>
        </RecipeCalculator>
        <Projects id="projectz"></Projects>
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <div id="contact-me" className="container">
              <form
                method="POST"
                action="https://formspree.io/f/moqpdaeb"
                id="contact-form"
              >
                <h2 id="contact-text">Contact me</h2>
                <div className="form-group">
                  <p>
                    <label>Name:</label>
                    <input id="name" name="name" type="text" />
                  </p>
                </div>
                <div className="form-group">
                  <p>
                    <label>Email Address:</label>
                    <input name="email" id="email" type="email" />
                  </p>
                </div>
                <div className="form-group">
                  <p>
                    <label>Message:</label>
                    <textarea id="message" name="message"></textarea>{" "}
                  </p>
                </div>

                <p>
                  <button type="submit">Submit</button>
                </p>
                <span
                  style={{
                    color: "#f0edf1",
                    fontSize: "0.7em",
                    fontWeight: "600",
                  }}
                >
                  Alternatively, you may e-mail me at{" "}
                  <a href="mailto:joannamakary@hotmail.com">
                    joannamakary@hotmail.com
                  </a>
                </span>
              </form>
              <div id="status"></div>
            </div>
          </div>
        </div>
        <Footer>
          <nav>
            <a href="https://www.linkedin.com/in/joannamakary/">Calculator</a> |{" "}
            <a href="https://github.com/JoannaMakary?tab=repositories">About</a>{" "}
            | <a href="#">Support</a>
          </nav>
          <br />
          &#169; 2021 Joanna Makary
        </Footer>
      </Homepage>
    );
  }
}

export default Home;
