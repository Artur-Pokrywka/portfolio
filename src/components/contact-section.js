import React from "react" 
import styled from "styled-components"
import theme from "../utils/theme"
import ContactForm from "./contact-form"


const ContactWrapper = styled.div`
   margin-top: 10rem;
   padding: 0 10vw;
   display: flex;
   justify-content: space-around;
   color: ${theme.colors.dark};
`;

const ContactInfo = styled.div`
    width: 40vw;
    display: flex;
    flex-direction: column;
`;

const ContactElemet = styled.div`
    margin: 1rem 0;
    font-size: 2rem;
`;

const StyledSpan = styled.span`
    color: ${theme.colors.lime};
    font-weight: 700;
`;

const ContactSubtitle = styled.h2`
    font-weight: 700;
    font-size: 3rem;
`;

const ContactText = styled.p`
    font-size: 1.2rem;
    margin: 1rem 0;
    line-height: 1.5;
`;

const text = "Jeżeli chciałbyś się przekonać w jaki sposób możemy wspólnie pracować nad projektem tak aby sprostał on Twoim wyobrażeniom skontaktuj się ze mną lub skorzystaj z formularza.";

const ContactData = ({phone, mail}) => {
    return (
        <ContactWrapper>
            <ContactInfo>
                <ContactSubtitle> Napisz do mnie </ContactSubtitle>
                <ContactText>{text}</ContactText>
                <ContactElemet> 
                    <StyledSpan> e-mail: </StyledSpan> {mail}    
                </ContactElemet>
                <ContactElemet>
                    <StyledSpan> tel: </StyledSpan> {phone}
                    </ContactElemet>
            </ContactInfo>            
            <ContactForm />
        </ContactWrapper>
    )
};

export default ContactData