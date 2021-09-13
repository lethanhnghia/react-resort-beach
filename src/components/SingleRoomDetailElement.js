import styled from "styled-components";

export const DetailSection = styled.div`
  width: 100vw;
  max-width: 100%;
  padding: 3rem 5rem;
`;

export const ImageList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

export const ImageContainer = styled.div`
  overflow: hidden;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;

export const DetailContainer = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  grid-gap: 3rem;
  padding-top: 2rem;
`;

export const Detail = styled.article`
  text-align: left;
`;

export const DetailHead = styled.h1`
  padding-bottom: 1rem;
`;

export const DetailMain = styled.p`
  font-size: 16px;
`;

export const Infor = styled.article``;

export const InforHead = styled.h1`
  padding-bottom: 1rem;
`;

export const InforMain = styled.ul`
  line-height: 2;
`;

export const InforItem = styled.li`
  list-style-type: none;
`;

export const Extra = styled.article`
  grid-column: 1/3;
`;

export const ExtraHead = styled.h1`
  padding-bottom: 2rem;
`;

export const ExtraInfor = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

export const ExtraItem = styled.li`
  list-style-type: disc;
`;
