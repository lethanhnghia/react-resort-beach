import React from "react";

import Room from "./Room";
import { useContext } from "react";
import { MyContext } from "./context";
import { RoomListContainer, NoRoom } from "./RoomListElement";
const RoomList = () => {
  const { filterRoom } = useContext(MyContext);
  const exist = filterRoom.length > 0;
  console.log(exist);
  return (
    <>
      {exist && (
        <RoomListContainer>
          {filterRoom.map((room, index) => (
            <Room room={room} key={index} />
          ))}
        </RoomListContainer>
      )}
      {!exist && <NoRoom>unfortunatly there is no room avaliable</NoRoom>}
    </>
  );
};

export default RoomList;
