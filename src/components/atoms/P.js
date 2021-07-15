import styled, {css} from "styled-components";

const P = styled.p`
 
 color: #000;
    line-height: 1.5em;
    font-size: 0.9em;
    text-align: justify;
    padding-top: 3em;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    ${props => props.stylingForContact && css`
                position: absolute;
                margin-left: 6em;
                top: 85%;
                font-size: 1.2em;
                line-height: 1.5em;
            text-align: justify;
            color: #FFF;
                @media screen and (max-width: 600px), screen and (max-height: 700px){
                    font-size: 1.1em;
                   
        }

    `
}

${props => props.stylingForContactName && css`
                font-weight: 600;
                position: absolute;
                margin-left: 3.4em;
                font-size: 1.4em;
                top: -4%;
                @media screen and (max-width: 600px), screen and (max-height: 700px){
                    font-size: 1.1em;
                   
                
                   
                    
        }

    `
}
${props => props.stylingForContactEmail && css`
                font-weight: 600;
                position: absolute;
                margin-left: 3.4em;
                font-size: 1.4em;
                top: 13%;
                @media screen and (max-width: 600px), screen and (max-height: 700px){
                    font-size: 1.1em;
                   
                    
        }

    `
}
${props => props.stylingForContactMessage && css`
                font-weight: 600;
                position: absolute;
                margin-left: 3.4em;
                font-size: 1.4em;
                top: 28%;
                
                @media screen and (max-width: 600px), screen and (max-height: 700px){
                    font-size: 1.1em;
                    
                    
        }

    `
}
${props => props.stylingWho && css`
color: #fff;
    line-height: 1.9em;
    font-size: 1em;
    text-align: justify;
    padding: 2em;
    margin-bottom: 5.9em;
background-color: #FFCF96;
                @media screen and (max-width: 600px), screen and (max-height: 700px){
                    font-size: 1.1em;
                    
                    
        }

    `
}
${props => props.stylingWho2 && css`
color: #fff;
    line-height: 1.9em;
    font-size: 1em;
    text-align: justify;
    padding: 2em;
    background-color: #97A090;
    margin-bottom: 7em;
    

                @media screen and (max-width: 600px), screen and (max-height: 700px){
                    font-size: 1.1em;
                    
                    
        }

    `
}

    `;

    export default P