import styled from 'styled-components';
import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link as Scroll } from 'react-scroll';



const TextContainer = styled.div ` 
    
    text-align: center;
    margin: 1rem 10rem;
    font-size: 1.5em;
    color: blue;
    height: 20%;

`;

const H1 = styled.h1`
text-align: center; 
`;




 const LandingPageText = () =>  {
     const [checked, setChecked] = useState(false);
     useEffect(() => {
         setChecked(true);
     },[])
    
    
    return ( 
    
        <div> 
            
            
            <TextContainer> 
                <h2> We are changing the future of tomorrow by implementing eco!</h2>
            </TextContainer>
              <Scroll to='What' smooth={true}> 
             <icons> 
                 <FaAngleDown style={{ fontSize: '36px' }} />  
            </icons>
            </Scroll>
        </div>    
    );
}

export default LandingPageText;