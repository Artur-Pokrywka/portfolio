import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.div`
    color: black;
`;

const Footer = () => {
    return (
        <FooterWrapper>
            ©{new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
        </FooterWrapper>
    )
};

export default Footer