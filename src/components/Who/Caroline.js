import React from "react"; 
import "./Who.css";
import { MdEmail } from 'react-icons/md';
import {FaPhoneAlt} from "react-icons/fa";
import {AiFillLinkedin} from "react-icons/ai"; 
import Styled from "styled-components"; 

const CarolineWholeContainer = Styled.div`
margin-top: 0px;
padding-top: 10%; 
padding-bottom: 0px; 
background-color:#FFF7EC; 
height: 100vh; 
@media (max-width: 734px) {
    height: auto;
   }
`;

 

const CarolineTitle = Styled.h1`
font-family: "Arial Black"; 
      font-size: 64px; 
      color: #EE6C4D; 
      padding-left: 30%;
      margin-bottom: 5%; 
      @media (max-width: 734px) {
         padding-left: 00%; 
        }
`;

const CarolineContainer= Styled.div`
      display: flex; 
      justify-content: space-evenly;
      width: 100%;
      margin: auto;
      flex-wrap: wrap; 
`; 

const CarolineText = Styled.p `
text-align: justify;
width: 50%;
font-family: "Roboto"; 
`;

const InfoContainerCaroline = Styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap; 
position: relative; 
top: 100px;
margin: auto; 
width: 65%;
@media (max-width: 734px) {
    position: static;
  top: 0px;
          } 
`; 

const TextBold = Styled.span`
font-weight: bold; 
`; 


const Caroline = () => {
    return (
        <CarolineWholeContainer>
            <CarolineTitle>Caroline Haakonsen</CarolineTitle>
           <CarolineContainer>
                <img className="Caroline" id="Caroline"src="../images/Caroline.jpg" />
                <CarolineText><TextBold>Design & Business + Advertising + Service Systems Design</TextBold>
<br />
<br />
Caroline har en Bachelor i Design & Business, og har derudover en uddannelse indefor reklame. Hun har derudover arbejdet i diverse forskellige kreative jobs med fokus på marketing, brugeroplevelser/UX... Noget med Advice opgaver. Hun har øje for detaljen og bruger sit kreative mindset til at redefinere og løse problemer. 
<br />
<br />
<TextBold><span className="text-bold">Stilling</span></TextBold>
<p>Partner & Creative Lead</p>
<TextBold><span className="text-bold">Funfact</span></TextBold>
<p>Der er ikke det sted, hvor Caroline ikke kan få prolet sig til en lille rabat. Trods Caroline ikke vil
stå ved det, har hendes år under studerne i Jylland givet hende jydementalitet. 
</p>
</CarolineText>

               </CarolineContainer>
               <InfoContainerCaroline>
                <p><MdEmail/>< a href="mailto: caroline.haakonsen@live.dk">caroline.haakonsen@live.dk</a></p>
                <p><FaPhoneAlt/><a href="Tel:+(45) 26 55 41 11">+(45) 26 55 41 11</a></p>
                <p><AiFillLinkedin/><a href="https://www.linkedin.com/in/carocaro/">Linkdin</a></p>
             </InfoContainerCaroline>
           
           </CarolineWholeContainer>
    )
}

export default Caroline; 

{/*Design & Business + Advertising + Service Systems Design
Caroline har en Kandidat i Service Systems Design og en Bachelor i Design & Business. Derudover har hun også en grad i Reklame fra Reklamelinjen 2019. Hendes nysgerrige sind og hårdtarbejdende attitude har bragt hende igennem forskellige forretningsområder i forskellige virksomheder i udland og indland. Bl.a. har hun arbejdet med digital marketing, UX, UI, konceptudvikling, webtilgængelighed og design. Hun har øje for detaljen og bruger sit kreative mindset til at redefinere og løse problemer. 
Stilling
Partner & Project manager
Funfact
Der er ikke det sted, hvor Caroline ikke kan få prolet sig til en lille rabat. Trods Caroline ikke vil stå ved det, har hendes år under studerne i Jylland givet hende jydementalitet.  */}