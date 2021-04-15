import PropTypes from "prop-types";
import React from "react";
import { createGlobalStyle } from 'styled-components';
import Footer from "./footer";
import Header from "./header";
import { useSiteGlobalCss } from "./particles/hooks/useSiteGlobalCss";
import Seo from './SEO/Seo';

const GlobalStyles = createGlobalStyle`
  ${props =>  props.settings ? props.settings : ''}
  .blog-read-me .btn-link, .blog-read-me .btn-link:hover{
    color: #44A754;
    padding-left: 0;
  }
  .card-title a:hover{
    text-decoration: none;
  }
  .post-category{
    list-style: none;
    margin-top: 0;
    margin-bottom: 5px;
    padding: 0;
    & li{
      display: inline-block;
      Padding: 0 10px;
      border-right: 2px solid #6c757d;
      &:first-child{
        padding-left: 0;
      }
      &:last-child{
        border-right: 0;
      }
    }
  }
  @media only screen and (min-width: 1200px) {
    .container{
      max-width: 84% !important;
    }
  }
`

const Layout = ({ children, seo }) => {
  const globalCss = useSiteGlobalCss()
  return (
    <>
      <GlobalStyles settings={globalCss} />
      <Seo data={seo} />
      <Header />
        {children}
      <Footer /> 
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
