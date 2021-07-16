import React from "react"; 
import "./Who.css"
import { MdEmail } from 'react-icons/md';
import {FaPhoneAlt} from "react-icons/fa";
import {AiFillLinkedin} from "react-icons/ai"; 
import Styled from "styled-components";
; 

const Maria = () =>{

    const MariaWholeContainer = Styled.div`
    width: 100%;
    height: 100vh;
    margin-top: 0%;
    padding-top: 10%;
    @media (max-width: 734px) {
        height: auto;
       }
   
    `; 

    const TitleName = Styled.h1` 
    font-family: "Arial Black"; 
    font-size: 64px; 
    color: #EE6C4D; 
    padding-right: 46%; 
    margin-top: 0px; 
    margin-bottom: 3%; 
   @media (max-width: 734px) {
   padding-left: 12%; 
  }
    `;

    const MariaContainer = Styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap; 
    flex-direction: row-reverse; 
    width: 100%;
    `; 

    const Infotext = Styled.p`
    text-align: justify;
    width: 50%;
    font-family: "Roboto"; 
    `; 

    const InfoContainer2 = Styled.div`
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

    return (
        // <div className="background-maria">
    
<MariaWholeContainer>
<TitleName>Maria Højgaard</TitleName>
<MariaContainer>
        <img className="Maria" id="Maria" src="../images/Maria.jpg" />
        <Infotext className="info-text"><TextBold>Service Designer - System og Oplevelsesdesign - Strategi og implementering</TextBold>
<br />
<br />
Maria har en  Bachelor i Informations og Performance Design fra Roskilde Universitet. Hun har erfaring med urban design, installations design og system design. Maria er en passioneret designer, der søger en mere bæredygtig og kunstnerisk verden. 
<br />
<br/>
<TextBold><span className="text-bold">Stilling</span></TextBold>
<br/>
<br/>
<TextBold><span className="text-bold">Funfact</span></TextBold></Infotext>
 </MariaContainer>
    <InfoContainer2>
    <p><MdEmail/><a href="mailto: mander20@student.aau.dk">mander20@student.aau.dk</a></p>
                <p><FaPhoneAlt/><a href="Tel:+(45) 22 18 56 15">+(45) 22 18 56 15</a></p>
                <p><AiFillLinkedin/><a href="https://www.linkedin.com/in/maria-h%C3%B8jgaard/">Linkdin</a></p>
       </InfoContainer2>
      
    </MariaWholeContainer>
    
  //  </div>
    ); 
}

export default Maria; 