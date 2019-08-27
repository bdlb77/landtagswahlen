/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import Header from "./header"
import {
  FuturaMedItalic,
  MyriadProRegOTF,
  GaramondOTF,
  FuturaMed,
} from "../config/fonts"
const theme = {
  primary: "rgb(231, 103, 64)",
  secondary: "rgb(253, 234, 226)",
  black: "rgb(0, 0, 0)",
  white: "rgb(255, 255,255)",
  accent: "rgb(142, 206, 255)",
  maxWidth: "1000px",
  lgBreak: "1300px",
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Futura-Italic';
    font-style: italic;
    src: local('Futura italic'), local('Futura-Italic'), url(${FuturaMedItalic}) format('truetype');
  }
  @font-face {
    font-family: 'Futura';
    src: local('Futura'), local('Futura'), url(${FuturaMed}) format('truetype');
  }
  @font-face {
    font-family: 'Myriad-Pro';
    src: local('Myriad-Pro'), url(${MyriadProRegOTF}) format('opentype');
  }
  @font-face {
    font-family: 'Garamond';
    src: local('Garamond'), url(${GaramondOTF}) format('opentype');
  }
 

  html{
    box-sizing: border-box;
    font-size: 8px;
    font-family: 'Futura Italic', sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Futura-Italic', sans-serif;
  }
  p {
    font-family: 'Futura', sans-serif;
    font-size: 2.5rem;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body{
    padding: 0;
    margin: 0;
    font-size: 2rem;
    line-height: 2;
  }
  a{
    text-decoration: none;
    color: ${theme.primary};
  }
`

const Inner = styled.main`
  margin: 0 auto;
`
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Inner>{children}</Inner>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
