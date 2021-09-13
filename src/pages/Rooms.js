import React from "react";
import HeroSection from "./../components/HeroSection";
import img from "../images/details-4.jpeg";
import RoomContainer from "../components/RoomContainer";
const Rooms = () => {
  return (
    <>
      <HeroSection
        backgroundImg={img}
        banner="Family Deluxe Room"
        btnInfo="back to rooms"
      />
      <RoomContainer />
    </>
  );
};

export default Rooms;
