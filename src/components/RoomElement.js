import styled from "styled-components";
import { Link } from "react-router-dom";

export const Detail = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0 0 20px 0;
  background-color: #242424;
  padding: 5px;
  color: #fff;
`;

export const RoomCost = styled.h6``;
export const RoomNight = styled.h6`
  font-size: 9 px;
`;

export const Image = styled.img`
  width: 100%;
  display: block;
`;

export const RoomInfo = styled.p`
  text-align: center;
  background-color: #b7b3b7;
  font-weight: bold;
  font-size: 15px;
  padding: 5px 0;
`;

export const LinkTo = styled(Link)`
  text-decoration: none;
  text-decoration: none;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: transparent;
  color: #cab05e;
  border: solid 3px;
  padding: 5px;
  transform: scale(0);
  text-decoration: none;
  text-transform: uppercase;
`;

export const RoomContainer = styled.div`
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 5px 8px 5px #676464;

  &:hover ${Detail} {
    opacity: 0;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  &:hover ${Image} {
    opacity: 0.3;
  }

  &:hover ${RoomInfo} {
    opacity: 0.3;
  }

  &:hover ${LinkTo} {
    transform: translate(-50%, -50%);
  }
`;
