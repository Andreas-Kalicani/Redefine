import React from 'react';

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
    
    
    return ( 

        <MainPart>        
            <LandingPageText />   
       </MainPart>
    
    );
}

export default FirstLandingPage;