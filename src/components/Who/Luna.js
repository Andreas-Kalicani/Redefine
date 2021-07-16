import React from "react"; 
import "./Who.css"
import Styled from "styled-components"; 
import { MdEmail } from 'react-icons/md';
import {FaPhoneAlt} from "react-icons/fa";
import {AiFillLinkedin} from "react-icons/ai"; 
import {BrowserRouter as Router , Link, Redirect, useHistory, Route, Switch} from "react-router-dom"; 
const Luna = () => {

const H1 = Styled.h1`
font-family: "Arial Black"; 
font-size: 48px; 
color: #000AFF;
text-align:center;
`; 

const Circle = Styled.div`
border-radius: 50%; 
`; 

const LunaWholeContainer = Styled.div`
line-height: 1em; 
margin-top: 0px;
padding-top: 3%; 
background-color:#fff7ec; 
height: 100vh;
@media (max-width: 734px) {
  height: auto;
 } 
`; 

const LunaTitle = Styled.h1`
font-family: "Arial Black"; 
font-size: 64px; 
color: #EE6C4D;
padding-top: 5%; 
padding-left: 7%; 
@media (max-width: 734px) {
   padding-left: 00%; 
  }
`; 

const LunaContainer = Styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
align-items: center;
padding-top: 3%;
`;

const LunaText = Styled.p`
width: 50%;
text-align: justify;
font-family: "Roboto"; 
`; 

const InfoContainer = Styled.div`
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

       <LunaWholeContainer >
       
       <LunaTitle>Luna Berlin</LunaTitle>
        
            <LunaContainer id="/Luna">
                   <img className="Luna" src="../images/Luna.jpg" />
                   <LunaText><TextBold>Service Økonom - Innovation & Entrepreneurship - Service Systems Design </TextBold>
                   <br />
                   <br/>
Luna har en Bachelor i Innovation & Entreprenørskab, specialiseret i event management. Hun har arbejdet med system design, performance design og teambuilding. Derudover har hun arbejdet i servicefaget som blandt andet fitness instruktør i 8 år. 
<br />
<br />

Luna’s spidskompetencer er projektledelse samt at arbejde i tæt kontakt med mennesker. 
<br />
<br />
<TextBold><span className="text-bold"> Stilling </span ></TextBold>
<br/>
<br />
<p>Partner & Project manager</p>
<TextBold><span className="text-bold">Funfact</span></TextBold>
<br/>
<br/>
Luna var 500 meter fra at løbe et halvmarathon. </LunaText>
             </LunaContainer>
               <InfoContainer>
                <p><MdEmail/><a href="mailto: lberli20@student.aau.dk">lberli20@student.aau.dk</a></p>
                <p><FaPhoneAlt/><a href="Tel:+(45) 22 37 74 10">+(45) 22 37 74 10</a></p>
                <p><AiFillLinkedin/><a href="https://www.linkedin.com/in/luna-berlin-752787127">Linkdin</a></p>
             </InfoContainer>
             
    </LunaWholeContainer > 
   

    )
}

export default Luna; 