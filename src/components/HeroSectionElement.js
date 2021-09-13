import styled from "styled-components";
import { Link } from "react-router-dom";

export const Hero = styled.div`
  margin-top: 66px;
  height: 100vh;
  max-height: ${({ minHeight }) => minHeight || "100vh"};
  width: 100vw;
  max-width: 100%;
  background: url(${(props) => props.img}) center/cover no-repeat;
  display: flex;
  overflow: hidden;
  justify-content: space-around;
  align-items: center;
`;

export const HeroContainer = styled.div`
  width: 60%;
  height: ${(props) => (props.detail ? "350px" : "200px")};
  background-color: #242424;
  opacity: 0.7;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Banner = styled.h1`
  color: #fff;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Detail = styled.h3`
  color: #fff;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

export const HeroLink = styled(Link)`
  background-color: #ceba78;
  text-decoration: none;
  color: #0d0d0d;
  font-size: 22px;
  text-align: center;
  text-transform: capitalize;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
