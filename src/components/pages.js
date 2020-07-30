 import React from "react" 
 import styled from "styled-components"
 import theme from "../utils/theme"
 import img1 from "../images/best-shop.png"


const PagesWrapper = styled.div`
    display: flex;
    margin-top: 7rem; 
    margin-bottom: 1rem; 
    width: 80vw;
    padding: 0 10vw;
`;

const PagesList = styled.ul`
    font-size: 2rem;
`;

const Page = styled.li`
    background-size: cover;
    display:flex;
    align-items:center;
    justify-content: center;
    width: 12rem;
    height: 12rem;
    margin: 2rem 0;
    transition: width 1s, height 1s;
    :hover {
        width: 14rem;
        height: 14rem;
    }
`;

const PageLink = styled.a`
    text-decoration: none;
    outline: none;
    color: ${theme.colors.lime};
    opacity: 0;
:hover {
    opacity: 1;
}
:focus {
    outline:none;
}
`;

const ProjectsList = [
    {
        name: "BestShop",
        src: "https://bestshop.netlify.app",
        img: img1
    },
    {
        name: "off-design", 
        src: "https://off-design.netlify.app",
        img: img1
    },
    {
        name: "awax", 
        src: "https://goldenn.netlify.app",
        img: img1
    },
]


const Pages = () => {
    return(
        <PagesWrapper>
             <PagesList>
            {
                ProjectsList.map( project =>
                <Page key={project.name} style={{backgroundImage: `url(${project.img})`}}>
                    <PageLink href={project.src} target="_blank"> {project.name} </PageLink>
                </Page> )
            }
            </PagesList>
        </PagesWrapper>
       
    ) 
}
export default Pages