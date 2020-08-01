import React from "react" 
import styled from "styled-components"
import theme from "../utils/theme"
import ContactForm from "./contact-form"

const ContactWrapper = styled.div`
   margin-top: 10rem;
   width: 80vw;
   padding: 0 10vw;
   display: flex;
   justify-content: space-between;
`;

const ContactInfo = styled.div`
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

const ContactData = ({phone, mail}) => {
    return (
        <ContactWrapper>
            <ContactInfo>
                <ContactSubtitle> Napisz do mnie </ContactSubtitle>
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