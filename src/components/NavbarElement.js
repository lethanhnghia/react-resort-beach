import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ffffff;
  z-index: 999;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
`;

export const NavLogo = styled.div`
  border: solid 4px 0d0d0d0d;
`;

export const LogoItem = styled.h2`
  text-align: center;
  padding: 20px 0;
`;

export const NavMenu = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLink = styled.div``;

export const Item = styled(Link)`
  text-align: center;
  text-decoration: none;
  color: #0d0d0d;
`;

export const NavMenuMobile = styled.div`
  display: none;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const MobileIcon = styled.div`
  position: absolute;
  top: auto;
  right: 10px;
  cursor: pointer;
`;

export const MobileList = styled.ul`
  display: none;

  @media screen and (max-width: 768px) {
    grid-column: 1/3;

    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all ease-in-out 1000ms;
  }
`;

export const MobileItem = styled.li`
  list-style: none;
  text-align: center;
`;

export const MobileLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  color: #0d0d0d;
`;
