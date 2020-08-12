import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"

import photo from "../images/photo1.jpg"
import cv from "../images/cv.pdf"


const AboutWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 80vw;
    margin: 4rem 10vw;
`;

const AboutInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;
`;

const AboutTitle = styled.h2`
    font-size: 3rem;
`;

const AboutDescription = styled.p`
    line-height: 1.5;
    margin: 1.5rem 0;
`;

const CvButton = styled.a`
    width: 10rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.white};
    background-color: ${theme.colors.lime};
    border: 1px solid ${theme.colors.lime};
    border-radius: 4px;
    outline-color: solid ${theme.colors.lime};
    :hover {
        text-decoration: none;
        background-color: ${theme.colors.white}; 
        color: ${theme.colors.lime};
    }
`;

const text = "Moje dotychczasowe doświadczenie zawodowe jest związane z branżą nieruchomości. Od kilku lat interesuję się programowaniem i ogromną satysfakcję dostarcza mi rozwiązywanie problemów oraz poszukiwanie nowych, lepszych rozwiązań. Obecnie skupiam się na doskonaleniu swoich umiejętności w języku JavaScript i staram się je wdrażać w projekty stron internetowych. Dobrze odnajduję się w zespole i zależy mi na poznawaniu nowych technologii. ";

const AboutPhoto = styled.img`
    width: 14rem;
    height: 25rem;
`;


const AboutMe = () => {
    return (
        <AboutWrapper>
            <AboutInfo>
                <AboutTitle> O mnie</AboutTitle>
                <AboutDescription>{text}</AboutDescription>
                <CvButton href={cv} target="_blank"> 
                    Pobierz CV 
                </CvButton>
            </AboutInfo>
            <AboutPhoto src={photo} alt="my photo"/>
        </AboutWrapper>
    );
};

export default AboutMe