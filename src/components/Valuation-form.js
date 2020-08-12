import React, { useState } from "react"
import styled from "styled-components"
import theme from "../utils/theme"
import Form from "react-bootstrap/Form"
import MyButton from "./myButton"


const FormWrapper = styled.div`
    width: 70vw;
    margin: 10rem 15vw;
`;

const Label = styled(Form.Label)`
   font-size: 1.5rem;
`;

const StyledInput = styled(Form.Control)`
    border: 1px solid ${theme.colors.dark};
    :focus {
        border-color: ${theme.colors.lime};
        box-shadow: 0 0 0.5rem ${theme.colors.lime};
    }
`;

const FormData = [
    {
        title: 'Strona responsywna',
        options: ['Tak', 'Nie'],
        id: 'form-1'
    },
    {
        title: 'Projekt graficzny',
        options: [
            'Projekt podstawowy', 'Dostarczę projekt graficzny', 'Indywidualny projekt graficzny stworzony przez profesjonalnego grafika'
        ],
        id: 'form-2'
    },
    {
        title: 'Tekst na stronę',
        options: [
            'Dostarczę tekst', 'Zlecę napisanie tekstu'
        ],
        id: 'form-3'
    },
    {
        title: 'Strona wielojęzyczna',
        options: ['Tak', 'Nie'],
        id: 'form-4'
    }
];


const ValForm = () => {
    const [fullName, setFullName] = useState(''); 
        const handleInputChange = (e) => { 
            setFullName(e.target.value);
        };
   
        const handleSubmit = (e) => {   
            e.preventDefault();
            console.log(fullName);
        };  
    

    return (
        <FormWrapper>
            <Form onSubmit={handleSubmit} >
                <Form.Group controlId="formBasicName">
                    <Label> Imię i nazwisko </Label>
                    <StyledInput type="text" placeholder="Imię i nazwisko lub nazwa firmy" onChange={handleInputChange} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Label> E-mail </Label>
                    <StyledInput type="email" placeholder="Twój adres e-mail" />
                </Form.Group>
                <Form.Group controlId="controlSelect1">
                    <Label> Rodzaj projektu </Label>
                    <StyledInput as="select" className={'form-control'} >
                        <option>Strona osobista / wizytówka firmy</option>
                        <option>Portfolio</option>
                        <option>Sklep internetowy</option>
                        <option>Blog</option>
                        <option>Inny</option>
                    </StyledInput>
                </Form.Group>
                    {
                        FormData.map( data => 
                            <Form.Group key={data.title}>
                                <Label >
                                    {data.title}
                                </Label>
                                    {
                                        data.options.map( option =>
                                            <Form.Check
                                                key={Math.random()}
                                                type="radio"
                                                label={option}
                                                name={data.id}
                                                id={data.id}
                                            />
                                        )
                                    }
                            </Form.Group>
                        )                           
                    }
                <Form.Group controlId="ControlTextarea1">
                    <Label>Dodatkowe informacje</Label>
                    <StyledInput as="textarea" className={'form-control'} rows="3" 
                        placeholder="Proszę napisz tutaj czego oczekujesz od nowej strony (np. inspiracje z istniejącyh już stron internetowych, dodatkowe usługi takie jak SEO itp.)"
                    />
                </Form.Group>
                <MyButton type="submit" text='Wyślij' /> 
            </Form>
        </FormWrapper >
    )
};

export default ValForm