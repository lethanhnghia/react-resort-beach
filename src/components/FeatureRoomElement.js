import styled from "styled-components";

export const FeatureContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  margin: 0 auto;
  padding: 5rem 0;
`;

export const TitleHead = styled.h1`
  text-align: center;
  padding: 3rem 0;
`;

export const RoomsContainer = styled.div`
  width: 80vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
