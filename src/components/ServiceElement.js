import styled from "styled-components";

export const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem 0;
  background-color: #d3d0d0;
`;

export const Title = styled.h1`
  text-align: center;
  padding-bottom: 1rem;
`;

export const ItemList = styled.div`
  width: 100vw;
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ItemContainer = styled.article`
  margin: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const IconContainer = styled.div`
  display: flex;
  font-size: 30px;
  justify-content: center;
  padding: 1rem 0;
  color: #d38888;
`;

export const TitleHead = styled.h5`
  text-align: center;
  font-size: 18px;
  padding: 1rem 0;
`;

export const Detail = styled.p`
  text-align: center;
  font-size: 15px;
`;
