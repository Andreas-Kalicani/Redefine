import React from 'react';
import styled from 'styled-components';
import Material from './Material';
import ParaThree from './ParaThree';
import ParaTwo from './ParaTwo';
import Icons from './Icons';
import Chart from './Chart'

const MainBody = styled.div ` 
    background-color: #FFF7EC;
    //display: grid;
    //place-items: center;
    //justify-content: center;
    //align-items: center;
    
`;

const Headding = styled.h2` 
    color: blue;
    //text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5%;
    font-family: arial black;
`;
const MiddleElement = styled.div `
    height: 100%;
    width: 100%;
    background-color: #FFF7EC;
    display: flex;
    justify-content: center;
    align-items: center;
    //padding: 10vh;
`;
const ParagraphContainer1= styled.div ` 
    height: 100%;
    width: 100%;
    max-width: fit-content;
    display: flex;
    justify-content: center;
    background-color: #FFCF96;
    
`;
const FirstWave = styled.div ` 
    
    background: #FFF7EC;
    text-align: center;
`;
const ParagraphContainer2 = styled.div ` 
    height: 100%;
    width: 100%;
    max-width: fit-content;
    background-color: #FFF7EC;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
const SecondWave = styled.div ` 
    background: #FFCF96;
    text-align: center;
`;

const IconContainer = styled.div `
    width: 100%;
    height: 100%;
    //padding-top: 10%;
    background-color: #97A090;
    font-weight: bold;
    
`;
const ThirdWave = styled.div `
    background: #FFF7EC;
`;
const ChartContainer = styled.div `
    height: 100%;
    width: 100%;
    display: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #FFF7EC;
`;
const ForthWave = styled.div ` 
    background: #97A090;
    height: 50%;

`;

function What() {
    return ( 
        <>
        <MainBody id= 'What'> 
            <Headding> <h2>WHAT DO WE DO?</h2> </Headding>
            
            <MiddleElement> <Material /> </MiddleElement>
            </MainBody>
         
         <FirstWave> 
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
             <path fill="#FFCF96" fill-opacity="1" d="M0,160L80,176C160,192,
             320,224,480,208C640,192,800,128,960,112C1120,96,1280,128,1360,
             144L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,
             320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <ParagraphContainer1> <ParaTwo /> 
           
             </ParagraphContainer1>
            </FirstWave>
            <SecondWave> 
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#FFF7EC" fill-opacity="1" d="M0,224L80,234.7C160,
                245,320,267,480,245.3C640,224,800,160,960,160C1120,160,1280,
                224,1360,256L1440,288L1440,320L1360,320C1280,320,1120,320,960,
                320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
                    </path></svg>
                
             <ParagraphContainer2>  <ParaThree /> </ParagraphContainer2>
            </SecondWave>

            <ThirdWave> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#97A090" fill-opacity="1" d="M0,160L80,181.3C160,
                203,320,245,480,229.3C640,213,800,139,960,112C1120,85,1280,107,
                1360,117.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,
                320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
                    </path></svg>
            <IconContainer> <Icons /> </IconContainer>
            </ThirdWave>
            <ForthWave> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#FFF7EC" fill-opacity="1" d="M0,160L80,181.3C160,
                203,320,245,480,229.3C640,213,800,139,960,112C1120,85,1280,107,
                1360,117.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,
                320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
                    </path></svg>
            <ChartContainer> <Chart /> </ChartContainer>
            </ForthWave>
            
           
        </>   
    );
}

export default What;