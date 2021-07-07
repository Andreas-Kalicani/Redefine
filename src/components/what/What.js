import React from 'react';
import styled from 'styled-components';
import Material from './Material';
import ParaThree from './ParaThree';
import ParaTwo from './ParaTwo';
import Icons from './Icons';
import Chart from './Chart'

const MainBody = styled.div ` 
    background-color: #fbe9f2;
    
`;

const Headding = styled.h2` 
    color: blue;
    text-align: center;
    padding: 1%;

`;
const MiddleElement = styled.div `
<<<<<<< HEAD:src/components/what/What.js
  margin-bottom: 0px; 
=======
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10vh;
>>>>>>> f742d29 (Completed the "What" according to wirefrmae.):src/components/what/H1.js
`;
const ParagraphContainer1= styled.div ` 
    height: 100%;
    width: 100%;
    max-width: fit-content;
    display: flex;
    justify-content: center;
    background-color: #f3d6a3;
    padding: 20vh;
`;
const ParagraphContainer2 = styled.div ` 
    height: 100%;
    width: 100%;
    max-width: fit-content;
    background-color: #fbe9f2;
    border-bottom-left-radius: 20% ;
    border-top-right-radius: 25%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15vh;

`;
const IconContainer = styled.div `
    width: 100%;
    height: 100%;
    padding-top: 10%;
    background-color: lightgray;
    font-weight: bold;
    
`;

function What() {
    return ( 
        <>
        <MainBody id='H1'> 
            <Headding> <h2>WHAT DO WE DO?</h2> </Headding>
            
            <MiddleElement> <Material /> </MiddleElement>
         </MainBody>
            <ParagraphContainer1> <ParaTwo /> </ParagraphContainer1>
            
            <ParagraphContainer2>  <ParaThree /> </ParagraphContainer2>
        
            <IconContainer> <Icons /> </IconContainer>
            <Chart />
           
        </>   
    );
}

export default What;