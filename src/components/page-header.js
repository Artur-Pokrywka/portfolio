import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"

import img from "../images/backgrounds/pic-1.jpg"
import img2 from "../images/backgrounds/pic-2.jpg"
import img3 from "../images/backgrounds/pic-3.jpg"
import img4 from "../images/backgrounds/pic-4.jpg"


const PageHeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    color: ${theme.colors.white};
    background-image: url(${img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: opacity 5s;
    animation-name: fadeInOpacity;
    animation-direction: normal;
    animation-duration: 40s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-play-state: running;
    animation-timing-function: ease-in-out;

    @keyframes fadeInOpacity {
        0% {
            background-image:url(${img});
        }
        25% {
            background-image:url(${img2});
        }
        50% {
            background-image:url(${img3});
        }
        75% {
            background-image:url(${img4});
        }
    }
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    z-index: 10;
`;

const PageHeaderTitle = styled.h1`
    font-size: 8rem;
    margin-right: 16rem;
`;

const SubTitle = styled.h2`
    margin-top: 2rem;
    font-size: 2rem;
    margin-right: 16rem;
    align-items: center;
`;

const SubText = styled.span`
    font-size: 2.5rem;
`;


const PageHeader = ({ title, subtitle, subtext }) => {
    return (
        <PageHeaderWrapper>
            <TitleWrapper>
                <PageHeaderTitle>{title} <SubText>{subtext}</SubText> </PageHeaderTitle>
                <SubTitle> {subtitle} </SubTitle>
            </TitleWrapper>         
        </PageHeaderWrapper> 
    )
};

export default PageHeader