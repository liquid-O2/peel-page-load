import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import { Loader } from "./loader"

import "../scss/site.scss"

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
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
    </>
  )
}

export default Layout
