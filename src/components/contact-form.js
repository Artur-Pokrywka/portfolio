import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"
import MyButton from "./my-button"

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
`;

const InputsWrapper = styled.div`
    margin: 1rem 0;
`;

const FormElement = styled.input`
    width: 12rem;
    height: 3rem;
    margin-right: 1rem;
    padding-left: 0.5rem;
    font-family: Open Sans;
    border-radius: 0.4rem;
    border: 1px solid ${theme.colors.dark}; 
    :focus {
        border-color: ${theme.colors.lime};
        box-shadow: 0 0 0.5rem ${theme.colors.lime};
    }
`;

const FromMessage = styled.textarea`
    width: 26rem;
    padding: 0.5rem 0 0 0.5rem;
    font-family: Open Sans;
    border-radius: 0.4rem;
    border: 1px solid ${theme.colors.dark}; 
    :focus {
        border-color: ${theme.colors.lime};
        box-shadow: 0 0 0.5rem ${theme.colors.lime};
    }
`;


const ContactForm = () => {
    return (
        <FormWrapper method="post" action="#">
            <InputsWrapper>
            <FormElement type="text" placeholder="Imię i Nazwisko"/>             
                <FormElement type="email" placeholder="Twój adres E-mail"/> 
            </InputsWrapper>   
            <FromMessage rows="5" placeholder="Wiadomość"/>
            <MyButton type="submit" text='Wyślij'> </MyButton>
        </FormWrapper>
    )
};

export default ContactForm