import React from "react";
import NavBar from "../../Global/components/NavBar/NavBar";
import Footer from "../../Global/components/Footer/Footer";
import styled from "styled-components";

const AboutScreen = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const About = () => {
  return (
    <AboutScreen>
      <NavBar />
      <Footer />
    </AboutScreen>
  );
};

export default About;
