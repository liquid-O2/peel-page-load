import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export const SectionTwo = ({ className = "" }) => {
  return (
    <div className='section z-2'>
      <section className={`section--content bg-light min-100vh p40 flex flex-col gap-60 space-between ${className}`}>
        <picture className='ratio-16-9 br10 pos-rel overflow'>
          <StaticImage src='../images/imageThree.jpg' className='bg-image' />
        </picture>
        <picture className='ratio-16-9 br10 pos-rel overflow'>
          <StaticImage src='../images/imageThree.jpg' className='bg-image' />
        </picture>
      </section>
    </div>
  )
}
