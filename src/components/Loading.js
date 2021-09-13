import React from "react";
import img from "../images/gif/loading-arrow.gif";
import { LoadingContainer, Header, ImgContainer } from "./LoadingElement";

const Loading = () => {
  return (
    <LoadingContainer>
      <Header>Loading rooms</Header>
      <ImgContainer src={img}></ImgContainer>
    </LoadingContainer>
  );
};

export default Loading;
