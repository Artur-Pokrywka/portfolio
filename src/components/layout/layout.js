import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"
import MainNav from "../../components/Main-nav"
import Footer from "../../components/Footer"
import "./reset.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import theme from "../../utils/theme"

const MainWrapper = styled.section`
  width: 100vw;
  font-family: Open Sans;
  color: ${theme.colors.dark};
  box-sizing: border-box;
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <MainWrapper>
        <MainNav />
        {children} 
        <Footer />
      </MainWrapper>
    </ThemeProvider>  
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
