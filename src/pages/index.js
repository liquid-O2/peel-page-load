import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Hero } from "../components/hero"

import { SectionOne } from "../components/sectionOne"
import { SectionTwo } from "../components/sectionTwo"
import { Peel } from "../components/peel"
import { SectionThree } from "../components/sectionThree"

const IndexPage = () => (
  <Layout>
    <Hero />
    <Peel>
      <SectionOne className={"bg-dark"} />
      <SectionTwo />
      <SectionThree />
    </Peel>
  </Layout>
)

export const Head = () => <Seo title='Home' />

export default IndexPage
