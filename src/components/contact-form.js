import React, {useState} from "react"
import styled from "styled-components"
import theme from "../utils/theme"
import MyButton from "./my-button"

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const InputsWrapper = styled.div`
    margin: 1rem 0;
`;

const FormInput = styled.input`
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
    const [formState, setFormState] = useState ({
        name: "",
        email: "",
        message:""
    });

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...formState })
        })
            .then(() => alert("Dziękuję za przesłanie wiadomości!"))
            .catch(error => alert(error));

        e.preventDefault();
    };

    return (
        <Form 
            name="contact"
            method="POST" 
            data-netlify="true"
            data-netlify-honeypot="bot-field"  
            onSubmit={handleSubmit}
        > 
            <input type="hidden" name="form-name" value="contact" />
            <InputsWrapper>
                <FormInput 
                    name="name" 
                    type="text" 
                    placeholder="Imię i Nazwisko"
                    value={formState.name} 
                    onChange={handleChange} 
                />             
                <FormInput 
                    name="email" 
                    type="email" 
                    placeholder="Twój adres E-mail"
                    value={formState.email}  
                    onChange={handleChange} 
                /> 
            </InputsWrapper>   
            <FromMessage 
                name="message" 
                rows="5" 
                placeholder="Wiadomość"
                value={formState.message}  
                onChange={handleChange} 
            />
            <MyButton type="submit" text='Wyślij' />
        </Form>
    )
};

export default ContactForm