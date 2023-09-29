import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export const SectionThree = ({ className = "" }) => {
  return (
    <div className='section z-1'>
      <section className={`section--content min-h-100vh bg-dark p40 flex space-between ${className}`}>
        <picture className='ratio-16-9 br10 pos-rel overflow'>
          <StaticImage src='../images/imageFour.jpg' className='bg-image' />
        </picture>
      </section>
    </div>
  )
}
