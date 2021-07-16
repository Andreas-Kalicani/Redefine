import styled from 'styled-components';
import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link as Scroll } from 'react-scroll';



const TextContainer = styled.div ` 
    
    
    font-size: 1.5em;
    font-family: arial black;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const H1 = styled.h2`
    text-align: center; 
    color: #000AFF;
`;
const Icons = styled.div `
    display: column;
    margin: 0 300;
    align-items: center;
    justify-content: center;
    color: #000AFF;
    border: 15px;
    border-color: black;

    &:hover {
        opacity: 1;
        transition: all 0.2s ease-in-out;
        transform: scale(1.5);
        z-index: 99;
        overflow: hidden;
    }   
`;




 const LandingPageText = () =>  {
     const [checked, setChecked] = useState(false);
     useEffect(() => {
         setChecked(true);
     },[])
    
    
    return ( 
    
        <div> 
            
            
            <TextContainer> 
                <H1> 
                <h2> Changing the ordinary.</h2>
                </H1>
            </TextContainer>
              <Scroll to='What' smooth={true}> 
             <Icons> 
                 <FaAngleDown style={{ fontSize: '40px', margin:'0 300' }} />  
            </Icons>
            </Scroll>
        </div>    
    );
}

export default LandingPageText;