import React from "react";
import PropTypes from "prop-types";
import { useContext } from "react";
import { MyContext } from "./context";
import {
  RoomContainer,
  Image,
  Detail,
  LinkTo,
  RoomInfo,
  RoomCost,
  RoomNight,
} from "./RoomElement";

const Room = ({ room }) => {
  const { getRoom } = useContext(MyContext);

  const { images, price, slug, name } = room;

  return (
    <RoomContainer>
      <Image src={images[0]}></Image>
      <Detail>
        <RoomCost>${price}</RoomCost>
        <RoomNight>per night</RoomNight>
      </Detail>
      <RoomInfo>{name}</RoomInfo>
      <LinkTo to={`/single-room/:${slug}`} onClick={() => getRoom(slug)}>
        Feature
      </LinkTo>
    </RoomContainer>
  );
};

export default Room;

Room.propTypes = {
  room: PropTypes.shape({
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};
