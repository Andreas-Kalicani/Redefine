import styled, {css} from "styled-components";

const H1 = styled.h1`
    padding-top: 1em;
    padding-bottom: 1.6em;
    text-align : center;
    font-weight : 650; 
    color: #000AFF;
   
    display: flex;
    flex-direction: column;
    font-size: 3em;
    font-family: Arial, Helvetica, sans-serif;


    ${props => props.stylingForContact && css`
            padding-top: 0.5em;
            padding-bottom: 0em;
            text-align: left;
            font-size: 3;
           padding-left: 1.5em;
            


            @media screen and (max-width: 600px), screen and (max-height: 700px){ 
            font-size: 2em;
            
            
            }
    `
}
${props => props.stylingWorked && css`
            padding-top: 2em;
            padding-bottom: 1em;

    `
}


    `;

    export default H1