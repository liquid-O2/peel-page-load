import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export const SectionOne = ({ className }) => {
  return (
    <div className='section z-3'>
      <section className={`section--content min-100vh p40 flex space-between ${className}`}>
        <picture className='ratio-16-9 br10 pos-rel overflow'>
          <StaticImage src='../images/imageOne.jpg' className='bg-image' />
        </picture>
      </section>
    </div>
  )
}
