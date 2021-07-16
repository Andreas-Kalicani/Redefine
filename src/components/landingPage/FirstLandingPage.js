//import { Collapse } from 'react-collapse';
import React, { useEffect, useState } from "react";
import LandingPageText from "./LandPageText";
import styled from "styled-components";

const MainPart = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
  background-image: url("/images/Frontpage.png");
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  background-repeat: no-repeat;
  align-items: center;
  justify-content: center;
`;

function FirstLandingPage() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div>
      <MainPart> 
        <LandingPageText/>
        </MainPart>
      </div>
  )
}

export default FirstLandingPage;