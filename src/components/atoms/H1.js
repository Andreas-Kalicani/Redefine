import styled, { css } from "styled-components";

const H1 = styled.h1`
  padding-top: 1em;
  padding-bottom: 1.6em;
  text-align: center;
  font-weight: 650;
  color: #000aff;

  display: flex;
  flex-direction: column;
  font-size: 3em;
  font-family: Arial Black, Helvetica, sans-serif;
  @media (max-width: 700px) and (min-width: 200px) {
    font-size: 1.5em;
    margin-right: 50%;
  }

  ${(props) =>
    props.stylingForContact &&
    css`
      padding-top: 0.5em;
      padding-bottom: 0em;
      text-align: left;
      font-size: 3;
      padding-left: 2em;

      @media screen and (max-width: 600px), screen and (max-height: 700px) {
        font-size: 2em;
      }
      @media (max-width: 1300px) and (min-width: 800px) {
        font-size: 2.5em;
      }
    `}
  ${(props) =>
    props.stylingWorked &&
    css`
      padding-top: 2em;
      padding-bottom: 1em;
    `}
`;

export default H1;
