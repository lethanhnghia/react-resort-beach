import React from "react";

import { useContext } from "react";
import img from "../images/room-1.jpeg";
import { MyContext } from "../components/context";
import HeroSection from "./../components/HeroSection";
import SingleRoomDetail from "./../components/SingleRoomDetail";

const SingleRoom = () => {
  const { singleRoom } = useContext(MyContext);

  if (!singleRoom.hasOwnProperty("slug"))
    return (
      <>
        <HeroSection
          backgroundImg={img}
          banner="Cound not found Room"
          btnInfo="Go back"
          height="60vh"
        />
      </>
    );

  return (
    <>
      <HeroSection
        backgroundImg={singleRoom.images[0] || img}
        banner={`${singleRoom.name} Room`}
        btnInfo="Go to Rooms"
        height="60vh"
      />
      <SingleRoomDetail singleRoom={singleRoom} />
    </>
  );
};

export default SingleRoom;
