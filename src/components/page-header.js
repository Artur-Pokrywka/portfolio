import React from "react"
import styled from "styled-components"
import pic1 from "../images/pic-1.jpg"
import theme from "../utils/theme"

const PageHeaderWrapper = styled.div`
    background-image: url(${pic1});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    flex-direction: column;
    color: ${theme.colors.white}
`;

const PageHeaderTitle = styled.h1`
    font-size: 7rem;
    margin-left: 14rem; 
`;

const SubTitle = styled.h2`
    margin-top: 2rem;
    font-size: 2rem;
    margin-left: 14rem;
`;

const SubText = styled.span`
    font-size: 2.5rem;
`;

const PageHeader = ({title, subtitle, subtext}) => {
    return ( 
        <PageHeaderWrapper>
            <PageHeaderTitle>{title} <SubText>{subtext}</SubText> </PageHeaderTitle>
            <SubTitle> {subtitle} </SubTitle>
        </PageHeaderWrapper>    
    )
};

export default PageHeader