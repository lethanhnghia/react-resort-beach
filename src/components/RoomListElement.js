import styled from "styled-components";

export const RoomListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;
  padding: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const NoRoom = styled.h1`
  padding-bottom: 4rem;
  text-align: center;
`;
