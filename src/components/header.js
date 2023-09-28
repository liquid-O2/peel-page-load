import React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <div className=' p20 text-center w-100'>
      <Link className='link' to="/">{siteTitle}</Link>
    </div>
  </header>
)

export default Header
