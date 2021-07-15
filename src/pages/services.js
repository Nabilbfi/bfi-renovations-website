import React from "react"
import Layout from "../components/layout"
import Banner from "../components/banners/bannerBasic"
import ServicesFull from "../components/services/servicesFull"
import Benefits from "../components/about/benefits"

import BannerImg from "../images/banner.png"

export default function Services() {
  return (
    <Layout>
      <Banner img={BannerImg} title="Services" />
      <ServicesFull />
      <Benefits />
    </Layout>
  )
}
