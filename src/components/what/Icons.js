import React from 'react';
import styled from 'styled-components';
import { CgArrowDownR } from 'react-icons/cg';

const MainBox = styled.div ` 
display: flex;
color: blue;
justify-items: flex-start;
justify-content: space-around;
padding: 70px;
`;
const WhatIcon = styled.div`
    height: 10em;
    

&:hover {
     color: #666;
    }

`;

const Icons =( ) => {
    return(
        <MainBox> 
           <WhatIcon> 
           <icon> <CgArrowDownR style={{ fontSize: '36px' }}/> </icon> 
           </WhatIcon> 
           <WhatIcon> 
           <icon> <CgArrowDownR style={{ fontSize: '36px' }}/> </icon> 
           </WhatIcon> 
           <WhatIcon> 
           <icon> <CgArrowDownR style={{ fontSize: '36px' }} /> </icon> 
           </WhatIcon> 
           
        </MainBox>
    )
}

export default Icons;