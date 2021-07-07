
import React from 'react';
import styled from 'styled-components';
//import Icons from './Icons';




const MainContent = styled.div `  
    height: 100vh;
    width: 100%;
    max-height: fit-content;
    padding-left: 5%;
    padding-right: 5%;
    box-sizing: border-box;
    display: flex;
    margin: 0;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    flex-direction: column;

`;
const Sideimage = styled.div ` 
    height: 100%;
    width: 100%;    

    box-sizing: border-box;
    display: flex;
    margin: 0;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    flex-direction: column;
    justify-content: center;
    &:hover {
     
    } 

`;

const Img = styled.img ` 
    height: 100%;
    width: 70%; 
    display: flexbox;
    flex-direction: column;
    justify-content: center;
    //padding-left: 10%;
    border-radius: 70%;
    
    &:hover {
        opacity: 1;
        transition: all 0.3s ease-in-out;
        transform: scale(1.1);
        z-index: 99;
        overflow: hidden;
    }   

`;

    

const Wrapper = styled.div ` 
    //display: flex;
    //flex-flow: nowrap;
    //align-items: stretch;

    
    margin: 0;
    min-width: 0;
    
    
    
    
    max-width: 95%;
    max-height: 95%;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 32px;
    margin-bottom: 0px;
    padding-left: 32px;
    padding-right: 32px;
    display: flex;
    align-content: center;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: stretch;

`;

const Material = (  ) => {
    return ( 
        <Wrapper> 
            
            <Sideimage> 
                <Img src="/images/Earth.png" alt="image" />
            
            </Sideimage> 

            

        <MainContent>
            <h2> Design der skaber Vaerdi</h2>
        
            Contrary to popular belief, Lorem Ipsum is not simply 
            random text. It has roots in a piece of classical Latin literature 
            from 45 BC, making it over 2000 years old. Richard McClintock,
             a Latin professor at Hampden-Sydney College in Virginia, 
             looked up one of the more obscure Latin words, consectetur,
             from a Lorem Ipsum passage, and going through the cites of 
             the word in classical literature, discovered the undoubtable source.
             Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 
             "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) 
             by Cicero, written in 45 BC. This book is a treatise on the theory 
             of ethics, very popular during the Renaissance. The first line of 
              Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in 
              section 1.10.32.

             The standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 
              from "de Finibus Bonorum et Malorum" by Cicero are also 
              reproduced in their exact original form, accompanied by 
              English versions from the 1914 translation by H. Rackham.
            
        </MainContent>
        

        </Wrapper>
        
    )
}

export default Material;