import React from 'react';
import styled from 'styled-components';
//import { CgArrowDownR } from 'react-icons/cg';

const MainBoxFirst = styled.div ` 
display: flex;
color: #FEE476;
justify-items: flex-start;
justify-content: space-around;
padding: 30px;
font-family: arial black;
`;
const MainBoxSecond = styled.div ` 
 display: flex;
 color: #FEE476;
 justify-items: flex-start;
 justify-content: space-around;
 padding: 30px;
 font-family: arial black;
`;
const MainBoxThird = styled.div ` 
 display: flex;
 color: #FEE476;
 justify-items: flex-start;
 justify-content: space-around;
 padding: 30px;
 font-family: arial black;
`;
const WhatIcon = styled.div`
    height: 10em;
    
 &:hover {
        opacity: 1;
        transition: all 0.2s ease-in-out;
        transform: scale(1.3);
        z-index: 99;
        overflow: hidden;
    }   
`;

const Icons =( ) => {
    return(
        <>
        <MainBoxFirst> 
           <WhatIcon> 
           <icon> Service Design </icon> 
           </WhatIcon> 
           <WhatIcon> 
           <icon> Strategi </icon> 
           </WhatIcon> 
           <WhatIcon> 
           <icon> Kortlaeging af <br/>interessenter </icon> 
           </WhatIcon>  
        </MainBoxFirst>

        <MainBoxSecond> 
            <WhatIcon> 
           <icon> Koncept & <br/> Design </icon> 
           </WhatIcon> 
           <WhatIcon> 
           <icon> Brugerinvolvering </icon> 
           </WhatIcon> 
           <WhatIcon> 
           <icon> Data & <br/>indsigter </icon> 
           </WhatIcon> 
        </MainBoxSecond>

        <MainBoxThird> 
            <WhatIcon> 
           <icon> Workshops</icon> 
               {/*<CgArrowDownR style={{ fontSize: '36px' }}/> */}
           </WhatIcon> 
           <WhatIcon> 
           <icon> Prototyper </icon> 
           </WhatIcon> 
           <WhatIcon> 
           <icon> Circulaer <br/> okonomi </icon> 
           </WhatIcon> 
        </MainBoxThird>

        </>
    )
}

export default Icons;