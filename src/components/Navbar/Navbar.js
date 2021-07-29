import React from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";
import HamburgerMenu from "./Hamburger";
import Logo from "./Logo";
import "../../App.css";
import { useHistory } from "react-router-dom";

const Sticky = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 19;
`;

const Nav = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: inherit;
  padding: 0px;
  margin: 0px;

  @media (max-width: 400px) {
    flex-wrap: nowrap;
  }

  .logo {
    cursor: pointer;
  }
`;

const Column = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

export default function Navbar(props) {
  const history = useHistory();

  const Redirect = () => history.push("/");

  return (
    <Sticky>
      <Nav>
        <Column>
          <Logo
            width="100%"
            height="100%"
            className="logo"
            onClick={Redirect}
          />
        </Column>
        <Column>
          <HamburgerMenu />
        </Column>
      </Nav>
    </Sticky>
  );
}
