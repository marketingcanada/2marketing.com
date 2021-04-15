import { graphql, Link, useStaticQuery } from "gatsby";
import React from 'react';

export const WPURLData = () => {
  const { wp } = useStaticQuery(
    graphql`
      query WPURL {
        wp {
          generalSettings {
            url
          }
        }
      }
    `
  )
  return wp.generalSettings.url
}

export const useRelative = (url, label, fontawesome, cssClasses) => {

  //console.log(label);
  if (!url) return undefined

  fontawesome = fontawesome || null;
  cssClasses = cssClasses || null; 

  const isFontawesome = fontawesome && fontawesome.fontawesomeClass

  let WPURL = WPURLData()
  let string = url

  if (string.startsWith(`/`)) {
    return (
      <Link activeClassName="active" className={`nav-link ${cssClasses ? cssClasses : ''}`} to={string}>
        {
          isFontawesome ? ( <> <i aria-hidden="true" className={fontawesome.fontawesomeClass}></i> {label}</>) : label
        }  
      </Link>
    )
  }

  if (string.match(WPURL)) {
    string = string.replace(WPURL, "")
    return (
      <Link activeClassName="active" className={`nav-link ${cssClasses ? cssClasses : ''}`} to={string}>
        {
          isFontawesome ? ( <> <i aria-hidden="true" className={fontawesome.fontawesomeClass}></i> {label}</>) : label
        }  
      </Link>
    )
  }
  else{
    return (
      <a className={`nav-link ${cssClasses ? cssClasses : ''}`} href={string}>
        {
          isFontawesome ? ( <> <i aria-hidden="true" className={fontawesome.fontawesomeClass}></i> {label}</>) : label
        }
      </a>
    )
  }

}

export default useRelative
