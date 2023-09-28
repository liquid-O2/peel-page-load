import React, { useEffect, useRef } from "react"

import gsap, { Power1, Power2, Power3, Expo } from "gsap"

export const Loader = () => {
  const wrapperRef = useRef()

  useEffect(() => {
    if (!wrapperRef.current) return
    let context = gsap.context(() => {
      const tl = gsap.timeline()
      tl.from(".loader--number", { textContent: 0, duration: 3, ease: Power3.easeOut, snap: { textContent: 2 }, stagger: 1 })
        .to(".loader--slide-one", { height: 0, duration: 1.25, ease: Expo.easeInOut })
        .to(".loader--slide-two", { height: 0, duration: 1.4, ease: Expo.easeInOut }, "<")
        .fromTo(".loader--number", { opacity: 1 }, { opacity: 0 }, "<")
    }, wrapperRef.current)
    return () => context.revert()
  }, [])

  return (
    <div className='loader--wrapper' ref={wrapperRef}>
      <div className='loader--number'>100</div>
      <div className='loader--slide-one' />
      <div className='loader--slide-two' />
    </div>
  )
}
