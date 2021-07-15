//import { Collapse } from 'react-collapse';
import React, { useEffect, useState } from "react";

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
        <h2>Design derskaber værdi</h2>
        <p>
          Vi udvikler værdiskabende løsninger indenfor brugerdreven innovation
          og Service Design. RE:DEFINE er et fremtidsfokuseret designbureau, som
          kan hjælpe din virksomhed med udvikling af både digitale og fysiske
          designløsninger for at øge dine kunders serviceoplevelse. Med den
          nyeste viden indenfor serviceorienteret, systembaseret og
          brugercentreret design tilbyder vi designrådgivning, workshop
          facilitering, konceptudvikling af innovative løsninger samt optimering
          af eksisterende processer og interessent-netværk. Da vores arbejde i
          høj grad er feltbaseret, er vi klar til at møde jer, der hvor I er.
        </p>
      </div>
  )
}

export default FirstLandingPage;