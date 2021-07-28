import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const Sidebar = styled.aside`
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  width: 500px;
  background-color: #000aff;
  position: fixed;
  margin: 0;
  top: 0;
  right: 0;
  padding-top: 4.5;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.5s ease-in-out;
  z-index: 1;

  ul {
    list-style: none;
  }

  li {
    padding: 0px 0px;
    color: #fff;
    margin-left: 10%;
    margin-top: 0px;
    font-family: "Arial black";
    font-size: 38px;
    color: #fff7ec;
    position: relative;
    top: 170px;
    line-height: 100px;

    &:hover {
      transition: transform 1s ease-out;
      position: relative;
      left: 30px;
    }
    @media (max-width: 1300px) and (min-width: 800px) {
      top: 10%;
    }
  }

  a {
    text-decoration: none;
    color: #fff7ec;
    &:hover {
      font-size: 39px;
    }
    @media (max-width: 1300px) and (min-width: 800px) {
      font-size: 1em;
    }
  }

  @media (min-width: 515px) {
    font-size: 50px;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const MoveAnimation = keyframes`
0% {right: 0px;}
50% {right: 25px;}
100% {right: 50px;}
`;

const RightNav = ({ open }) => {
  return (
    <Sidebar open={open}>
      <ul>
        <li>
          <a href="/">WHAT?</a>
        </li>

        <li>
          <a href="/how">HOW?</a>
        </li>

        <li>
          <a href="/work">WORK</a>
        </li>

        <li>
          <a href="/who">WHO?</a>
        </li>

        <li>
          <a href="/contact">CONTACT</a>
        </li>
      </ul>
    </Sidebar>
  );
};

export default RightNav;
