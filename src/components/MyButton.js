import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"

const FormButton = styled.button`
    width: 10rem;
    height: 3rem;
    margin-top: 1rem;
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.lime}; 
    border-radius: 4px;
    background-color: ${theme.colors.lime};
    outline-color: ${theme.colors.lime} !important;
    :hover {
        background-color: ${theme.colors.white}; 
        color: ${theme.colors.lime};
    }
`;

const MyButton = ( {text} ) => (
    <FormButton>
        {text}
    </FormButton>
);

export default MyButton