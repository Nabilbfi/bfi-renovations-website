import React from "react"
import FacebookFeed from "../components/facebookFeed"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"

export default function Test() {
  return (
    <div>
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
      <FacebookFeed />
    </div>
  )
}
