import React from 'react';
import styled from 'styled-components';

const ParaWrapper = styled.div ` 
    height: 100%;
    width: 80%;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-content: center;
    `;
const ChartWrapper = styled.div ` 
`;
const Img = styled.img `
    height: 80%;
    width: 70%;
    
`;
const BottomText = styled.div `
    height: 100%;
    width: 100%;
    border-left: 20%;
    border-right: 20%;
`;

const Chart = () => {
    return ( 
        <>
    <ParaWrapper>
        <h1><font color="blue">Vi finder ind til roden af dine <br/> problemer
             og vender dem til <br/>nye muligheder</font></h1>
    </ParaWrapper>
    <ChartWrapper> 
            <Img src="/images/dd.REDEFINE.png" alt="Chart" />
    </ChartWrapper>
    <BottomText>
        <h6>Contrary to popular belief, Lorem Ipsum is not simply 
            random text. It has roots in a piece of classical Latin literature 
            from 45 BC, making it over 2000 years old. Richard McClintock,
             a Latin professor at Hampden-Sydney College in Virginia, 
             looked up one of the more obscure Latin words, consectetur,
             from a Lorem Ipsum passage, and going through the cites of 
             the word in classical literature, discovered the undoubtable source.
             Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of </h6>
    </BottomText>
        </>
    )
};

export default Chart;