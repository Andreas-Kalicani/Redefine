  import React from 'react';
  import H1 from './atoms/H1'
  import H2 from './atoms/H2'
  import P from './atoms/P'
  import ContainerContact from './atoms/ContainerContact'
  import ContactDiv from './atoms/ContactDiv'
  import InputContact from './atoms/InputContact'
  import TextArea from './atoms/TextArea'
  import '../App.css'
  




  function Contact() {
    return (
    
        <ContainerContact>
            <ContactDiv stylingForContactLeft>
                <H1 stylingForContact  >Kontakt os</H1>
                <H2 stylingForContact smallerFont  >Vi er altid klar på nye henvendelser og nye historier.<br/>

Udfyld kontaktformularen til højre eller send  en mail <br/> på redefine@outlook.dk. 

<br/>Vi ser frem til at høre fra dig.</H2>
                {/* <P stylingForContact>Based in Denmark.<br/> Working remote and worldwide.</P> */}
            </ContactDiv>
            <ContactDiv stylingForContact>
                <P stylingForContactName>Name*</P>
                <InputContact/>
                <P stylingForContactEmail>Email*</P>
                <InputContact stylingForContactEmail/>
                <P stylingForContactMessage>Message*</P>
                <TextArea></TextArea>
                <button className="buttonContact">Send</button>
                
                
            </ContactDiv>

        </ContainerContact>
    
    )
  }

  export default Contact 