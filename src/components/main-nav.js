import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import theme from "../utils/theme"


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
    font-size: 1.5rem;
    display: flex;
    list-style: none;
`;

const MainNavElement = styled.li`
    margin: 2rem;
    letter-spacing: 0.1rem;   
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${theme.colors.white};
    :hover {
        color: ${theme.colors.lime};
    }
    :focus {
        outline:none;
    }
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
                        <StyledLink to={page.link} activeClassName={"true"} activeStyle={{color: theme.colors.lime}}> {page.name} </StyledLink>
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
