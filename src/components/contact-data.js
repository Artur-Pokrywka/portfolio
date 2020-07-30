import React from "react" 
import styled from "styled-components"
import theme from "../utils/theme"

const ContactWrapper = styled.div`
   margin-top: 6rem;
   width: 80vw;
   padding: 0 10vw;
   display: flex;
   flex-direction: column-reverse;
   justify-content: center;
   align-items: center;
   font-size: 2rem;
`;

const ContactElemet = styled.div`
    margin: 1rem 0;
`;

const ContactData = ({phone, mail}) => {
    return (
        <ContactWrapper>
            <ContactElemet> Tel: {phone}</ContactElemet>
            <ContactElemet> E-mail: {mail}</ContactElemet>
        </ContactWrapper>
    )
};

export default ContactData