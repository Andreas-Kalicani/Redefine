import styled, {css} from 'styled-components'


const H2 = styled.h2`

text-align : center;
font-size : 1em;
display: flex;
flex-direction: row;
position: relative;
justify-content: space-evenly;
margin-top: 1.5em;
line-height: 1.5em;
text-align: justify;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;


${props => props.smallerFont && css`
                
                font-size: 1.7em;
                text-align : justify;
                justify-content: space-evenly;
                @media screen and (max-width: 1280px){
                    font-size: 2em;
                    padding-top: 0em;
                   
        }
    `
}
${props => props.stylingForContact && css`
                position: absolute;
              
                padding-right: 5em;
                padding-top: 1em;
                font-size: 1.5em;

       
    `
}
${props => props.stylingForContactDown && css`
                position: absolute;
                margin-left: 3em;
                padding-top: 1em;

       
    `
}
${props => props.stylingWorked && css`
               font-size: 2em;
               padding-bottom: 1em;

       
    `
}

`;


export default H2