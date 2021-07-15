import React from "react"
import { Helmet } from "react-helmet"

import SEO from "./seo"
import HeaderBasic from "./headers/headerBasic"
import FormContact from "../components/forms/formContact"
import FooterBasic from "./footers/footerBasic"
import FeaturedTestimonial from "./testimonials/featuredTestimonial"
import CallToAction from "./callToActions/callToAction"
import FacebookFeed from "./facebookFeed"

import ActionImg from "../images/ph.png"

export default function Layout({ children }) {
  return (
    <>
      <SEO />
      <Helmet>
        <script
          async={true}
          defer={true}
          crossOrigin="anonymous"
          crossorigin="anonymous"
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v11.0"
          nonce="k2bkwVkX"
        ></script>
      </Helmet>
      <HeaderBasic />
      <main>{children}</main>
      <FeaturedTestimonial />
      <CallToAction
        img={ActionImg}
        textPrimary="Call BFI Renovations Today!"
        textSecondary="Call or text the number below to get a free, no-obligation estimate from a professional on your next home renovation project."
      />
      <FooterBasic />
    </>
  )
}
