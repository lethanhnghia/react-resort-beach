import Room from "./Room";
import Loading from "./Loading";
import { MyContext } from "./context";
import PropTypes from "prop-types";
import React, { useContext } from "react";

import {
  FeatureContainer,
  TitleHead,
  RoomsContainer,
} from "./FeatureRoomElement";

const FeatureRooms = () => {
  const { rooms, loading, featureRooms } = useContext(MyContext);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <FeatureContainer>
          <TitleHead>Feature Rooms</TitleHead>
          <RoomsContainer>
            {featureRooms.map((room) => (
              <Room room={room} key={room.id} />
            ))}
          </RoomsContainer>
        </FeatureContainer>
      )}
    </>
  );
};

export default FeatureRooms;

FeatureRooms.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired),
  }),
  loading: PropTypes.bool,
  featureRooms: PropTypes.array,
};
