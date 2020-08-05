import React from "react" 
import styled from "styled-components"
import theme from "../utils/theme"
import Image from "react-bootstrap/Image"

import img from "../images/icon.png"


const TimelineWrapper = styled.div`
    width: 80wv;
    margin: 0 10vw;
    margin-bottom: 5rem;
`;

const TimelineTitle = styled.h2`
    font-size: 3rem;
    text-align: center;
    margin-bottom: 4rem;
`;

const TimelineRow = styled.div`
    width: 80vw;
    display: flex;
`;

const SideElement = styled.div`
    width: 40vw;
    display: flex;
    padding-top: 2rem;
    justify-content: space-around;
    border-right: 2px dashed ${theme.colors.dark};
    border-bottom: 4px solid ${theme.colors.dark};
`;

const TextContainer = styled.div`
    width: 20rem;
    display: flex;
    flex-direction: column;
`;

const ElementTitle = styled.h3`
    font-size: 2rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
`;

const ElementText = styled.p`
    line-height: 1.5;
`;

const ElementImage = styled(Image)`
    width: 10rem;
    height: 10rem;
`;

const Date = styled.div`
    width: 15vw;
    margin-right: 25rem;
    font-size: 3rem;
    padding-left: 2rem;
    display: flex;
    align-items: flex-end;
    border-bottom: 1px solid ${theme.colors.dark};
`;


const Timeline = () => {
    return (
        <TimelineWrapper>
            <TimelineTitle> Edukacja i Doświaczenie  </TimelineTitle>
            <TimelineRow>
                <SideElement>
                    <TextContainer>
                        <ElementTitle> tytuł </ElementTitle>
                        <ElementText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Aspernatur rem vitae corporis fugit possimus odit voluptas eligendi.
                        </ElementText>
                    </TextContainer>    
                    <ElementImage src={img} />
                </SideElement>     
                <Date> 2010 </Date>  
            </TimelineRow>
        </TimelineWrapper>
    )
};

export default Timeline
