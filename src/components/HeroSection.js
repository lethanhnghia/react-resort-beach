import React from "react";
import defaultImg from "../images/default.jpeg";

import {
  Hero,
  HeroContainer,
  Banner,
  Detail,
  HeroLink,
} from "./HeroSectionElement";
const HeroSection = ({ backgroundImg, banner, detail, btnInfo, height }) => {
  return (
    <Hero img={backgroundImg || defaultImg} minHeight={height}>
      <HeroContainer detail={detail}>
        <Banner>{banner}</Banner>
        <Detail>{detail}</Detail>
        <HeroLink to="/rooms">{btnInfo}</HeroLink>
      </HeroContainer>
    </Hero>
  );
};

export default HeroSection;
