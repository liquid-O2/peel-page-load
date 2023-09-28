import React from "react"

const Footer = () => (
  <footer className='p20 w-100 text-center'>
    © {new Date().getFullYear()} &middot; Built by
    {` `}
    <a href='https://www.groundcrew.com.au'>Groundcrew</a>
  </footer>
)

export default Footer
