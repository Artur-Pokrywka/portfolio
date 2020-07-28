import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import MainNav from "../../components/main-nav"
import Footer from "../../components/footer"
import "./reset.css"

const MainWrapper = styled.section`
  width: 80%;
  padding: 0 10%;
  font-family: Montserrat;
  color: #fff;
  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }) => {
  return (
      <MainWrapper>
        <MainNav />
        {children} 
        <Footer />
      </MainWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
