import React from "react";
import HeroSection from "./../components/HeroSection";
import img from "../images/default.jpeg";
import Service from "./../components/Service";
import FeatureRooms from "../components/FeatureRooms";
const Home = () => {
  return (
    <>
      <HeroSection
        backgroundImg={img}
        banner="Luxirious Rooms"
        detail="deluxe room start at $299"
        btnInfo="our rooms"
      />
      <Service />
      <FeatureRooms />
    </>
  );
};

export default Home;
