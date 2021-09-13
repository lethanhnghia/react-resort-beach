import React from "react";

import {
  DetailSection,
  ImageList,
  ImageContainer,
  DetailContainer,
  Detail,
  DetailHead,
  DetailMain,
  Infor,
  InforHead,
  InforMain,
  InforItem,
  Extra,
  ExtraHead,
  ExtraInfor,
  ExtraItem,
  Image,
} from "./SingleRoomDetailElement";

const SingleRoomDetail = ({ singleRoom }) => {
  return (
    <DetailSection>
      <ImageList>
        {singleRoom.images.map((image, i) => (
          <ImageContainer key={i}>
            <Image src={image}></Image>
          </ImageContainer>
        ))}
      </ImageList>
      <DetailContainer>
        <Detail>
          <DetailHead>Details</DetailHead>
          <DetailMain>{singleRoom.description}</DetailMain>
        </Detail>
        <Infor>
          <InforHead>Info</InforHead>
          <InforMain>
            <InforItem>Price: ${singleRoom.price}</InforItem>
            <InforItem>Size: {singleRoom.size}</InforItem>
            <InforItem>Max capacity: {singleRoom.capacity}</InforItem>
            <InforItem>
              {singleRoom.pet ? "Pet allowed" : "No pet allowed"}
            </InforItem>
          </InforMain>
        </Infor>
        <Extra>
          <ExtraHead>Extras</ExtraHead>
          <ExtraInfor>
            {singleRoom.extras.map((item, index) => (
              <ExtraItem key={index}>{item}</ExtraItem>
            ))}
          </ExtraInfor>
        </Extra>
      </DetailContainer>
    </DetailSection>
  );
};

export default SingleRoomDetail;
