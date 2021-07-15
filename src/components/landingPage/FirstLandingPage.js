//import { Collapse } from 'react-collapse';
import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import LandingPageText from './LandPageText';


const MainPart = styled.div ` 
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        height: 100vh;
        background-image: url("/images/Frontpage.png");
        background-size: cover;
        background-position-x: center;
        background-position-y: center;
        background-repeat: no-repeat;
        align-items: center;
        justify-content: center;
    `;
 
function FirstLandingPage() {
    const [ checked, setChecked ]= useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);
    
    
    return ( 



        <MainPart>  
            
              {/* <Collapse in={checked} {...Collapse(checked ? { timeout: 1000 } : {})}
                collapsedHeight={50}>  */}
                    <LandingPageText />
           
               {/* </Collapse>  */ }  
           
             
            
       </MainPart>
    
    );
}

export default FirstLandingPage;