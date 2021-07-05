//import { Collapse } from 'react-collapse';
import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import LandingPageText from './LandPageText';


const MainPart = styled.div ` 
        display: flex;
        height: 100vh;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url("/images/pexels.jpg");
        align-items: flex-end;
        justify-content: center;
        height: 100vh;
        
    `;
 
function FirstLandingPage() {
    const [ checked, setChecked ]= useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);
    
    
    return ( 



        <MainPart>  
              {/* <Collapse in={checked} {...Collapse(checked ? { timeout: 1000 } : {})}
                collapsedHeight={50}>  */ } 
                 <LandingPageText />
           
               {/* </Collapse>  */ }  
           
             
            
       </MainPart>
    
    );
}

export default FirstLandingPage;