import React from "react"; 
import Styled from "styled-components";
import Luna from "./Luna";  
import Maria from "./Maria";  
import Caroline from "./Caroline";  
import "./Who.css"; 
import { Link as Links, animateScroll as scroll } from "react-scroll";

import {BrowserRouter as Router , Link, Redirect, useHistory, Route, Switch} from "react-router-dom"; 



const Who = (props) => {

    const H1 = Styled.h1`
    font-family: "Arial Black"; 
    font-size: 48px; 
    color: #000AFF; 
    position: relative; 
    `; 
    
    const Paragraph = Styled.p`
    font-family: "Roboto";
    font-size: 18px;
    /* position: relative; */
    text-align:justify;
    margin-top: 2.5%;
    width: 65%;
    /* height: 240px; */
    
   
    `; 

    const SubText = Styled.p`
    color: white; 
    min-height: 100px;
    min-width: 10%;
    padding-top: 10%;
    font-size: 46px; 
    `; 
   
    const ContainerFlex = Styled.div`
     width: 100%; 
     display:flex; 
     justify-content: space-around;     
    `; 

    const FlexText = Styled.p`
     line-height: 29,74px; 
     
    `; 

    const Image = Styled.div`
    width: 20%; 
    min-width: 250px; 
    height: 100%; 
    text-align: center;
    margin-bottom: 0px; 
    `; 

    const ImageContainer = Styled.div`
    display:flex;
    flex-wrap: wrap; 
    justify-content: space-evenly; 
    margin-top: 5%; 
    padding-top: 0.5%; 
    padding-bottom: 10.5%; 
    `; 

    const Height = Styled.p`
    line-height: 20px;
    width: 100%;
    margin-top: 10%; 
    line-height: 20px;
   
    `; 

    const HeaderContainer = Styled.div` 
     height:100vh:
     width:100%; 
     display:flex;
     flex-direction: column; 
     justify-content: center; 
     align-items: center;
     padding-top: 7%; 
     padding-bottom: 0px; 
    `; 

    const Span = Styled.span`
    color:#FEE476; 
    line-height: 30px;
    `;

    const ReadMore = Styled.p`
    color: white; 
    `;

    const Line = Styled.hr `
    color: #000AFF; 
    `;

    return (
<div class="Who" >

<HeaderContainer>
     <H1>Lær os at kende</H1>
    <Paragraph>
    RE:DEFINE er en konsulent virksomhed som kan hjælpe din virksomhed med at få et overblik over forskellige problemstillinger, interessenter, brugere, test, workshops og løsninger både i digitale og fysiske rammer. 
    <br />
    <br/>

Med samlet 15 års erfaring indenfor brugerdrevent design og konceptudvikling tilbyder vi rådgivning indenfor både store og små design projekter. Vi er drevet af en fælles passion indenfor service design, der gør os til et kompetent udviklingshold indenfor digitale og fysiske løsninger.
<br />
<br />

Vi ønsker at løfte vores klienter mest muligt og kombinere dem med andre aktører, når det giver mening. Vi er troværdige konsulenter, som altid er ærlige i vores dialog med vores klienter. Vi sætter vores værdier højt, som indebærer ærlighed, vedholdenhed, høj faglighed og kvalitet, passion og bæredygtighed.
     </Paragraph>
     </HeaderContainer>
     <div className="theContainer">
     <SubText> <p>Mød holdet bag RE:DEFINE</p></SubText>
    <ImageContainer>
       
    <Image>
<Links
    activeClass="active"
    to="Caroline"
    spy={true}
    smooth={true}
    offset={-300}
    duration={800}
>
<Link to="/Caroline">
      <img className="Caroline-Haakonson size" src="../images/Caroline.jpg" alt="Caroline Haakonson"/>
    
      </Link>
    <Height><Span><span>Partner & Creative Consultant</span></Span><br />CAROLINE HAAKSON<ReadMore><p className="about">Læs mere om Caroline ></p></ReadMore></Height>
      </Links>
    </Image>
    <Image>
  <Links
    activeClass="active"
    to="Luna"
    spy={true}
    smooth={true}
    offset={-170}
    duration={800}
>
<Link to="/Luna">
    <img className="Luna-Berlin size"  alt="Luna Berlin" src="../images/Luna.jpg"/>
   
</Link>
 <Height><Span><span>Partner & Project Manager</span></Span><br />  LUNA BERLIN <ReadMore><p className="about">Læs mere om Caroline ></p></ReadMore> </Height>
 
     </Links>
</Image>
<Image>
 <Links
    activeClass="active"
    to="Maria"
    spy={true}
    smooth={true}
    offset={-250}
    duration={800}
>
<Link to="/Maria">
      <img className="Maria-Højgaard size" src="../images/Maria.jpg" alt="Maria Højgaard"/>
    
   </Link>  
<Height><Span><span>Partner & Design Consultant</span></Span><br />MARIA HØJGAARD<ReadMore><p className="about">Læs mere om Caroline ></p> </ReadMore> </Height>
    </Links>
</Image>
 </ImageContainer>
</div>
<Caroline />
<hr className="mariaLine" />
<Maria />
<hr className="lunaLine" />
<Luna />

    </div>
    );
}

export default Who; 



