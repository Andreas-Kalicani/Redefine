import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./Rightnav";

const StyledBurger = styled.div`
  /* display: flex;
  justify-content: space-around;
  flex-flow: column nowrap; */
  width: 5rem;
  height: auto;
  margin-right: 1rem;
  z-index: 20;

  .invis {
    width: 35px;
    height: 3px;
    margin: 6px 0;
    visibility: hidden;
  }

  div {
    width: auto;
    height: 0.5rem;
    background-color: ${({ open }) => (open ? "#000AFF" : "#FFFFFF")};
    border-radius: px;
    margin-top: 0px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    background-color: red;

    &:nth-child(1) {
      transform: ${({ open }) =>
        open ? " rotate(45deg) translate(-4.6px, 2px)" : "rotate(0deg)"};
      background-color: ${({ open }) => (open ? "#FFFFFF" : "#000AFF")};
    }

    &:nth-child(3) {
      transform: ${({ open }) =>
        open ? " translateX(100%)" : "translate(0deg)"};
    }

    &:nth-child(3) {
      transform: ${({ open }) =>
        open ? "rotate(-45deg) translate(-28px, 15px) " : "rotate(0)"};
      background-color: ${({ open }) => (open ? "#FFFFFF" : "#000AFF")};
    }
  }
`;

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div className="invis" />
        <div className="tip" />
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};

export default HamburgerMenu;
