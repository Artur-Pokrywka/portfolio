import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types"


const MainNavWrapper = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 35vw;
  position: fixed;
  top: 0;
  z-index: 1;
`;

const MainNavList = styled.nav`
    font-size: 1.4rem;
    text-transform: uppercase;
    display: flex;
    list-style: none;
`;

const MainNavElement = styled.li`
    margin: 2rem;
`;

const StyledLink = styled(Link)`
    color: #FFD700;
    text-decoration: none;
`;

const MainNav = () => {
    const Pages = [
        {
          name: "start",
          link: "/"
        },
        {
          name: "projekty",
          link: "/projects/"
        },
        {
          name: "kontakt",
          link: "/contact/"
        }, 
    ];

    return (
    <MainNavWrapper> 
        <MainNavList>
            {
                Pages.map( page => 
                    <MainNavElement key={page.name}>
                        <StyledLink to={page.link} activeClassName={"true"} activeStyle={{color: 'red'}}> {page.name} </StyledLink>
                    </MainNavElement> ) 
            }
        </MainNavList>
    </MainNavWrapper>
    )
};

MainNav.propTypes = {
    siteTitle: PropTypes.string,
}

MainNav.defaultProps = {
    siteTitle: 'portfolio',
}

export default MainNav
