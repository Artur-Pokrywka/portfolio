import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"
import MainNav from "../../components/main-nav"
import Footer from "../../components/footer"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./reset.css"
import theme from "../../utils/theme"

const MainWrapper = styled.section`
  width: 100vw;
  font-family: Open Sans;
  color: #000;
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
