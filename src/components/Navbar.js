import React from "react";

import { useState } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";

import {
  Nav,
  NavLogo,
  LogoItem,
  NavMenu,
  NavLink,
  NavItem,
  MobileList,
  Item,
  NavMenuMobile,
  MobileIcon,
  MobileItem,
  MobileLink,
} from "./NavbarElement";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMobile = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <Nav>
      <NavLogo>
        <LogoItem>Beach Resort</LogoItem>
      </NavLogo>
      <NavMenu>
        <NavItem>
          <NavLink>
            <Item to="/home">Home</Item>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Item to="/rooms">Rooms</Item>
          </NavLink>
        </NavItem>
      </NavMenu>
      <NavMenuMobile>
        <MobileIcon onClick={handleMobile}>
          <AiOutlineUnorderedList />
        </MobileIcon>
      </NavMenuMobile>
      {mobileOpen && (
        <MobileList>
          <MobileItem>
            <MobileLink to="/">Home</MobileLink>
          </MobileItem>
          <MobileItem>
            <MobileLink to="/rooms">Rooms</MobileLink>
          </MobileItem>
        </MobileList>
      )}
    </Nav>
  );
};

export default Navbar;
