//import { Collapse } from 'react-collapse';
import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import LandingPageText from './LandPageText';


const MainPart = styled.div ` 
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
    const [ checked, setChecked ]= useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);

    
    
   
}
h2 {
    font-family: 'Roboto', sans-serif;
font-size: 4em;
color: #000AFF;
width: 50vh;

padding-bottom: 1em;
   
}

`;

const FifthSection = styled.div`
width: 100%;
height: 100vh;
background-image: url(${Background4}) ;
background-repeat: no-repeat;
background-size: cover;


            
                <div>
                <H2>Design derskaber værdi</H2>
                <P>Vi udvikler værdiskabende løsninger indenfor brugerdreven innovation og Service Design.

RE:DEFINE er et fremtidsfokuseret designbureau, som kan hjælpe din virksomhed med udvikling af både digitale og fysiske designløsninger for at øge dine kunders serviceoplevelse. Med den nyeste viden indenfor serviceorienteret, systembaseret og brugercentreret design tilbyder vi designrådgivning, workshop facilitering, konceptudvikling af innovative løsninger samt optimering af eksisterende processer og interessent-netværk.

Da vores arbejde i høj grad er feltbaseret, er vi klar til at møde jer, der hvor I er.  </P>
</div>
<Img src="../images/image1.svg"/>

 </SecondSection>
<ThirdSection>
   
<div>
     <h2>WE PUT <span>HUMANS FIRST</span> , AS WE BELIEVE THAT THE GREATEST <span>SOLUTIONS</span>  COMES FROM <span>CO-CREATING</span> , NOT ONLY WITH THE CLIENT, BUT BY <span>COLLABORATING WITH STAKEHOLDERS AND THE USERS </span>WITHIN THE PROJECT <span>ECOSYSTEM.</span> </h2>
         
</div>

</ThirdSection>
<FourthSection>
    
<div>
                <H2>Rådgivning og konceptudvikling</H2>
                <P>Vi tror på at fremtidens værdi skabes ved at redefinere hvad vi ved om nutidens værdibehov. I vores hurtigt udviklende verden er værdiskabelse stærkt forbundet med serviceoplevelse og ressourceforbrug.  </P>
                <P>Service Design er en forholdsvis ny disciplin indefor design, som fokuserer på at finde kreative og værdiskabende løsninger til uhåndgribelige problemstillinger. Ved at anvende viden og metoder indenfor Service Design, skaber vi værdi for dine processer og produkter med henblik på at styrke værdikonstellationen mellem dig og dine eksisterende og potentielle partnere. 

Sammen indgår vi i en kreativ process, der udvælges og tilpasses til dine behov.
  </P>
</div>

</FourthSection>
<FifthSection/>
<SixthSection>
    <h2>Vi finder ind til roden af dine problemer og vender dem til nye muligheder.</h2>
    <Img2 src="../images/graph.png"/> 
    <p>Vores designproces trækker på den udbredte tilgang, Design Thinking. Denne tilgang er ligeledes representeret gennem den klassiske Double Diamond, som vi har draget inspiration fra i vores proces model nedenfor. Sammen med erfaring og viden indenfor både digitalt, urbant og oplevelsesøkonomisk design skaber vi en proces, der er rettet mod at skabe stærke og værdifulde løsninger ud fra dine behov.</p>
</SixthSection>




            </div>



        )
    }
  
    export default How