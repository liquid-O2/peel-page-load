import React, { useEffect, useRef } from "react"

import gsap, { Power1, Power2, Power3, Expo } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export const Peel = ({ children }) => {
  const peelWrapperRef = useRef(null)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    if (!peelWrapperRef.current) return
    let context = gsap.context(() => {
      gsap.to(".section", {
        yPercent: -100,
        ease: "none",
        stagger: 0.5,
        scrollTrigger: {
          trigger: peelWrapperRef.current,
          start: "top top",
          end: "+=300%",
          scrub: true,
          pin: true,
        },
      })
    }, peelWrapperRef.current)

    const sections = peelWrapperRef.current.querySelectorAll(".section")
    const totalSections = sections.length

    sections.forEach((section, index) => (section.style.zIndex = totalSections - index))
    return () => context.revert()
  }, [])

  return (
    <section className='peel--wrapper' ref={peelWrapperRef}>
      {children}
    </section>
  )
}
