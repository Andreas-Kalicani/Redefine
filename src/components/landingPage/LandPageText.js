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
    align-items: center;
    justify-content: center;
    color: #000AFF;
    border: 15px;
    border-color: black;
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
                 <FaAngleDown style={{ fontSize: '40px' }} />  
            </Icons>
            </Scroll>
        </div>    
    );
}

export default LandingPageText;