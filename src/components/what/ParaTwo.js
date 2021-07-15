import React from 'react';
import styled from 'styled-components';

const ParaWrapper = styled.div ` 
    
    height: 100%;
    width: 80%;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-content: center;
    
`;

const ParaTwo = () => {
    return ( 
    <ParaWrapper>
        <div> 
        <h1>WE PUT <font color="white">HUMANS FIRST</font>, AS WE BELIEVE 
            THAT THE GREATEST <font color="white"> SOLUTIONS </font>  COMES 
            FROM <font color="white"> CO-CREATING </font>CO-CREATING, NOT ONLY WITH 
            THE CLIENT, BUT BY <font color="white"> COLLABORATING WITH 
            STACKHOLDERS AND THE USERS </font> WITHIN THE PROJECT <font color="white"> ECOSYSTEM. </font> 
        </h1>
        
        </div>
    </ParaWrapper>

    )
};

export default ParaTwo;