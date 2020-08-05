import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"


const PageHeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    flex-direction: column;
    color: ${theme.colors.white}
`;

const PageHeaderTitle = styled.h1`
    font-size: 8rem;
    margin-right: 16rem;
`;

const SubTitle = styled.h2`
    margin-top: 2rem;
    font-size: 2rem;
    margin-right: 16rem;
`;

const SubText = styled.span`
    font-size: 2.5rem;
`;


const PageHeader = ({ title, subtitle, subtext }) => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "bg/pic-1.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
                }
            }
        }
    }` )

    return ( 
        <BackgroundImage
                fluid={data.file.childImageSharp.fluid} alt="Monitor screen with code" 
            >
            <PageHeaderWrapper>
                <PageHeaderTitle>{title} <SubText>{subtext}</SubText> </PageHeaderTitle>
                <SubTitle> {subtitle} </SubTitle> 
            </PageHeaderWrapper>    
        </BackgroundImage>
    )
};


export default PageHeader;
