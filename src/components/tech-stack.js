import React from "react" 
import styled from "styled-components"
import theme from "../utils/theme"
import Carousel from "react-bootstrap/Carousel"
import Image from "react-bootstrap/Image"
import "../components/layout/mystyle.css"

import img1 from "../images/tech/front-end.png"
import img2 from "../images/tech/react.png"
import img3 from "../images/tech/ux.png"

const CarouselWrapper = styled.div`
    height: fit-content;
    color: #fff;
    background-color: ${theme.colors.dark};
`;

const StyledCarousel = styled(Carousel)`
    margin-bottom: 8rem;
    padinng-bottom: 2rem;
`;

const CarouselTitle = styled.h2`
    width: 80vw;
    margin: 2rem 15vw 2rem 15vw;
    font-size: 2rem;
    padding-top: 2rem;
`;

const TitleSpan = styled.span `
    font-size: 3rem;
`;

const Slide = styled(Carousel.Item)`
    width: 80vw;
    margin: 0 10vw;
    height: 25rem;
    background-color: ${theme.colors.dark};  
    transition: 1s ease-in-out;
    transition-delay: 0.5s;
`;

const SlideTitle = styled(Carousel.Caption)`
    text-align: start;
    font-size: 3rem;
    position: static;
    padding: 1rem 0;
`;

const DataWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const TextWrapper = styled.div`
`;

const SlideText = styled.p`
    line-height: 1.5;
    margin-top: 1rem;
    font-size: 1rem;
    width: 40vw;
`;

const SlideImage = styled(Image)`
    width: 20rem;
    height: 20rem;
`;

const CarouselData =[
    {
        title:  "Front-end",
        text: `Swoje projekty koduję w zastosowaniu o najnowsze technologie, takie jak HTML5, CSS3 czy JavaScript. 
                Dzięki czemu strony, które tworzę są zgodne z najnowszymi wytycznymi światowych organizacji oraz są przyjazne dla wyszukiwarek.`,
        image:  img1,
        alt: "Front end tech stack graphic"   
    },
    {
        title:  "React & Gatsby",
        text: `Swoje projekty koduję w zastosowaniu o najnowsze technologie, takie jak HTML5, CSS3 czy JavaScript. 
                Dzięki czemu strony, które tworzę są zgodne z najnowszymi wytycznymi światowych organizacji oraz są przyjazne dla wyszukiwarek.`,
        image:  img2,
        alt: "React & Gatsby tech graphic"  
    },
    {
        title:  "Design & UX",
        text: `Swoje projekty koduję w zastosowaniu o najnowsze technologie, takie jak HTML5, CSS3 czy JavaScript. 
                Dzięki czemu strony, które tworzę są zgodne z najnowszymi wytycznymi światowych organizacji oraz są przyjazne dla wyszukiwarek.`,
        image:  img3,
        alt: "Design & UX graphic"   
    },
]; 


const TechStack = () => {
    return (
        <CarouselWrapper>
            <CarouselTitle> 
                <TitleSpan> Technologie, </TitleSpan> z którymi pracuję 
            </CarouselTitle>
            <StyledCarousel interval={null} fade={true}>
                {
                    CarouselData.map( tech =>
                    <Slide key={tech.title} >
                        <DataWrapper>
                            <TextWrapper>
                                <SlideTitle> {tech.title} </SlideTitle>
                                <SlideText> {tech.text} </SlideText>
                            </TextWrapper>
                            <SlideImage src={tech.image} alt={tech.alt} /> 
                        </DataWrapper> 
                    </Slide> )
                }
            </StyledCarousel>
        </CarouselWrapper> 
    )
};


export default TechStack