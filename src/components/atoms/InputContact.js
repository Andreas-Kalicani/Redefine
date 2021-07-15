import styled, {css} from "styled-components";

const InputContact = styled.input`
 position: absolute;
 margin-left: 75px;
    padding: 10px;
  outline: none;
  background: #FFF;
  width: 70%;
  border: none;
  top: 15%;
    font-size: 1em;
    @media screen and (max-width: 1280px){
                    font-size: 1em;
                    padding: 5px;
        }

  ${props => props.stylingForContactEmail && css`
       
                position: absolute;
                margin-left: 75px;
                top: 30%;
                
                @media screen and (max-width: 1280px){
                    font-size: 1em;
                    padding: 5px;
        }

    `
}

`;

export default InputContact