  import React from 'react';
  import H1 from './atoms/H1'
  import H2 from './atoms/H2'
  import ContainerContact from './atoms/ContainerContact'
  import ContactDiv from './atoms/ContactDiv'
  import '../App.css'
  import emailjs from 'emailjs-com';
  import styled from 'styled-components'
  import Popup from 'reactjs-popup';
  
  
  const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 30em;
    margin-top: 0em;
    padding-left: 1em;
    @media (max-width: 700px){
    width:70%; 
    height: 110vh; 
    }
    @media (max-width: 378px){
        width: 50%; 
    }

    label{
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 550;
        font-size: 1.3em;
        margin-top: 1em;
    }
    input {
        height: 2em;
        border: none;
    }
    textarea {
     width: 100%;
     height: 20em;
     border: none;
      
     @media (max-width: 1300px) and (min-width: 800px){
    height: 12em;
 }
}
  `;



  function Contact() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_vtvy94s', 'template_jg5xahb', e.target, 'user_dv0vo2Dt1rpR8kzyk2cXD')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }

    return (
    
        <ContainerContact>
            <ContactDiv stylingForContactLeft>
                <H1 stylingForContact  >Kontakt os</H1>
                <H2 stylingForContact smallerFont  >Vi er altid klar på nye henvendelser og nye historier.<br/>

Udfyld kontaktformularen til højre eller send  en mail på redefine@outlook.dk <br/> 

<br/>Vi ser frem til at høre fra dig.</H2>
                {/* <P stylingForContact>Based in Denmark.<br/> Working remote and worldwide.</P> */}
            </ContactDiv>
            <ContactDiv stylingForContact>
                <Form onSubmit={sendEmail}>
                <label>Name</label>
      <input type="text" name="name" placeholder='Enter your name' id='name'/>
      <label>Email</label>
      <input type="email" name="email"  placeholder='Enter your email' id='email' />
      <label  >Message</label>
      <textarea name="message"  />
      <Popup trigger={<button className="buttonContact">Send</button>} position="right center">
    <div>Email Sent !</div>
  </Popup>
      
                </Form >
                
            </ContactDiv>

        </ContainerContact>
    
    )
  }

  export default Contact 