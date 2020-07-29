import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"


const FooterWrapper = styled.div`
    color: #fff;
    width: 80vw;
    padding: 0.5rem 10vw;
    position: fixed;
    bottom: 0;
    background-color: ${theme.colors.dark};
`;

const FooterLink = styled.a`
    text-decoration: none;
    
`;

const Footer = () => {
    return (
        <FooterWrapper>
            ©{new Date().getFullYear()}, Built with
            {` `}
            <FooterLink href="https://www.gatsbyjs.org">Gatsby </FooterLink>
        </FooterWrapper>
    )
};

export default Footer