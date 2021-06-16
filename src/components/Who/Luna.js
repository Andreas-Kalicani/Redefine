import React from "react"; 
import "../../App.css"
import Styled from "styled-components"; 
import { MdEmail } from 'react-icons/md';
import {FaPhoneAlt} from "react-icons/fa";
import {AiFillLinkedin} from "react-icons/ai"; 

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

    return (
       <div className="luna-whole-container">
        
         <h1 className="luna-title" id="Luna" >WHO IS LUNA?</h1>
         
            <div className="luna-container" id="Luna">
                   <img className="Luna" src="../images/Luna.jpg" />
                   <p className="luna-text">Service Økonom - Innovation & Entrepreneurship - Service Systems Design 
                   <br />
                   <br/>
Luna har en Bachelor i Innovation & Entreprenørskab, specialiseret i event management. Hun har arbejdet med system design, performance design og teambuilding. Derudover har hun arbejdet i servicefaget som blandt andet fitness instruktør i 8 år. 
<br />
<br />

Luna’s spidskompetencer er projektledelse samt at arbejde i tæt kontakt med mennesker. 
<br />
<br />
<span className="text-bold"> Stilling </span >
<br />
<br />
<span className="text-bold">Funfact</span>
<br/>
<br/>
Luna var 500 meter fra at løbe et halvmarathon. </p>
                </div>  
                <div className="info-container">
                <p><MdEmail/>lberli20@student.aau.dk</p>
                <p><FaPhoneAlt/>+(45) 22 37 74 10</p>
                <p><AiFillLinkedin/>https://www.linkedin.com/in/luna-berlin-752787127</p>
                </div> 
                    
       </div> 
    )
}

export default Luna; 