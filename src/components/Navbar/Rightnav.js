import React from "react"; 
import styled from "styled-components"; 
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 
import { keyframes } from 'styled-components'; 


const Ul = styled.ul`
    list-style:none; 
    display:flex; 
    flex-flow: column nowrap; 
    margin:0;
    }
    
li{
    padding: 0px 0px; 
    color: #fff; 
    margin-left: 10%;
    margin-top: 0px;
    font-family: "Arial black"; 
    font-size: 38px;  
    color: #FFF7EC;
    position: relative;
    top:170px;
    line-height: 100px;
  

    &:hover{
        transition: transform 1s ease-out;
        position: relative; 
        left: 30px; 
    }
  
}


a{
    text-decoration: none;
    color: #FFF7EC;
      &:hover{
        color: #028194; 
        font-size: 39px;
        
      }
}


@media (min-width:515px){
    font-size: 50px; 
}

@media (max-width:2000px) {
 flex-flow: column nowrap;
 background-color: #000AFF; 
 position: fixed; 
 transform: ${({open}) => open ? "translateX(0)" : "translateX(100%)"}; 
 top: 0; 
 right: 0; 
 height: 100vh; 
 width: 500px; 
 padding-top: 4.5; 
 transition: transform 0.5s ease-in-out;
 z-index: 1;
}

`;

const MoveAnimation = keyframes`
0% {right: 0px;}
50% {right: 25px;}
100% {right: 50px;}
`;


const RightNav = ({open}) => {
return (
    <Ul open={open}>

   <li><a href="/">WHAT?</a></li>

  
        <li><a href="/how">HOW?</a></li>
        
     
        <li><a href="/work">WORK?</a></li>
        
   
        <li><a href="/who">WHO?</a></li>
        
    
        <li><a href="/contact">CONTACT</a></li>
     
         </Ul>
)
} 

export default RightNav; 