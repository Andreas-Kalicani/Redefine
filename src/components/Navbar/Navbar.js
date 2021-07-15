import React, {useState, useEffect} from "react"; 
import styled from "styled-components"; 
import RightNav from "./Rightnav"; 
import HamburgerMenu from "./Hamburger";
import "../../App.css";

const Nav = styled.div`
    
width: 100%; 
height: 00px; 
padding: 00px; 
display:flex; 
justify-content: space-between; 
margin: 0px; 



.logo{
    padding: 0px 0;
   
}

.logo-name{
    color: black;
}

.image{
    position: releative; 
    left: 300px;
}

`;

const Logo = styled.h1`

font-size: 1.5em; 
position:fixed;
margin-left: 10px;
margin-top: 10px;
z-index: 90;
font-family: Arial, Helvetica, sans-serif;
.logo1{
    color: black;
}

`; 

const SubText = styled.h1`
width: 90%; 
color: white;
text-align: center; 
position:absolute; 

left:5.1%;
font-size: 1.2em; 
.highlight{
    color: #F17D29;
}
`;



export function Navbar(props){
return (
    <Nav >
  <div className="logo">
  
  <Logo>
 <h1 className="logo-name">RE:<span className="logo1">DEFINE</span></h1>
 </Logo>
 
</div>
<HamburgerMenu />
 
    </Nav>
)
}

export default Navbar; 