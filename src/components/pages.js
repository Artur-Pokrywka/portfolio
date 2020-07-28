 import React from "react" 
 import styled from "styled-components"


const PagesWrapper = styled.div`
    display: flex;
    margin-top: 7rem; 
    margin-bottom: 1rem; 
`;

const PagesList = styled.ul`
    font-size: 2rem;
`;

const Page = styled.li`

`;

const PageLink = styled.a`
 text-decoration: none;
`;

const ProjectsList = [
    {
        name: "BestShop",
        src: "https://bestshop.netlify.app"
    },
    {
        name: "off-design", 
        src: "https://off-design.netlify.app"
    },
    {
        name: "awax", 
        src: "https://goldenn.netlify.app"
    },
]


const Pages = () => {
    return(
        <PagesWrapper>
             <PagesList>
            {
                ProjectsList.map( project =>
                <Page key={project.name}> 
                 <PageLink href={project.src} target="_blank"> {project.name} </PageLink>
                </Page> )
            }
            </PagesList>
        </PagesWrapper>
       
    ) 
}
export default Pages