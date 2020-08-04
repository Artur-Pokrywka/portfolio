import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"
import Button from "react-bootstrap/Button"

import photo from "../images/photo1.jpg"


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

const AboutButton = styled(Button)`
    width: 10rem;
    height: 3rem;
    color: ${theme.colors.lime};
    border-color: ${theme.colors.lime}; 
    :hover {
        background-color: ${theme.colors.lime}; 
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
                <AboutTitle> Kilka słów o mnie</AboutTitle>
                <AboutDescription>{text}</AboutDescription>
                <AboutButton variant="outline-success" >Zobacz moje CV </AboutButton>
            </AboutInfo>
            <AboutPhoto src={photo} alt="my photo"/>
        </AboutWrapper>
    );
};

export default AboutMe