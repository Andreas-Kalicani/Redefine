import React from 'react';

import styled from 'styled-components';

import LandingPageText from './LandPageText';


const MainPart = styled.div ` 
        display: flex;
        //flex-direction: row;
        height: 100vh;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url("/images/pexels.jpg");
        align-items: flex-end;
        justify-content: center;
        height: 100vh;
        
    `;
    /*const LandingText = styled.div ` 
        color: black;
      
    
    `;*/

   /* const ImgLanding = styled.img ` 
        height: 100%;
        width: 100%; 
    
    `; */
 


function FirstLandingPage() {
    
    
    return ( 

        <MainPart>
                     <img src="../images/Luna.jpg" />              
            
                 <LandingPageText /> 
            
             
            
       </MainPart>
    
    );
}

export default FirstLandingPage;