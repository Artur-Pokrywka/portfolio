 import React from "react" 
 import styled from "styled-components"
 import theme from "../utils/theme"
 import Image from "react-bootstrap/Image"

 import img1 from "../images/projects/proj-1.jpg"
 import img2 from "../images/projects/proj-2.jpg"
 import img3 from "../images/projects/proj-3.jpg"
 

const PagesWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 7rem 10vw 3rem 10vw;
`;

const PagesList = styled.ul`
    font-size: 2rem;
    display: flex;
`;

const Page = styled.li`
    background-size: cover;
    margin: 2rem 0;   
    position: relative;
`;

const PageLink = styled.a`
    text-decoration: none;
    outline: none;
    color: ${theme.colors.lime};
    position: absolute;
    left: 0;
    right: 0;
    top: 80%;
    text-align: center;
    z-index: 1;
    opacity: 0;
:focus {
    outline:none;
}
:hover {
    opacity: 1;
    text-decoration: none;
    color: ${theme.colors.lime};
}
`;

const PageImage = styled(Image)`
    width: 24rem;
    height: 20rem;
    transition: width 1s, height 1s;
    :hover ~${PageLink} {
        opacity: 1;
    }
`;

const ProjectsList = [
    {
        name: "bestshop", 
        src: "https://bestshop.netlify.app",
        img: img1
    },
    {
        name: "awax",
        src: "https://goldenn.netlify.app",
        img: img2
    },
    {
        name: "off-design", 
        src: "https://off-design.netlify.app",
        img: img3
    },
];


const Pages = () => {
    return(
        <PagesWrapper>
             <PagesList>
            {
                ProjectsList.map( project =>
                <Page key={project.name}>
                    <PageImage src={project.img} alt="website small image" fixed/>
                    <PageLink href={project.src} target="_blank"> {project.name} </PageLink>
                </Page> )
            }
            </PagesList>
        </PagesWrapper>
    ) 
}
export default Pages