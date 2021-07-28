import React from "react";
import styled from "styled-components";
import HamburgerMenu from "./Hamburger";
import Logo from "./Logo";
import "../../App.css";
import "./navbar.css";

const Sticky = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
`;

const Nav = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: inherit;
  padding: 0px;
  margin: 0px;
`;

const Column = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

export default function Navbar(props) {
  return (
    <Sticky>
      <Nav>
        <Column>
          <Logo width="100%" height="100%" className="logo" />
        </Column>
        <Column>
          <HamburgerMenu />
        </Column>
      </Nav>
    </Sticky>
  );
}
