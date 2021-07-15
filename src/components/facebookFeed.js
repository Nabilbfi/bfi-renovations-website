import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import FindUsFB from "../images/socials/find-us-on-facebook.svg"

const ImgWrapper = styled.div`
  .find-us-img {
    width: 500px;
  }
`

export default function FacebookFeed() {
  return (
    <div>
      {/* <ImgWrapper>
        <StaticImage
          src={"../images/socials/find-us-on-facebook.svg"}
          alt=""
          className="find-us-img"
          placeholder="blurred"
        />
      </ImgWrapper> */}
      <div
        className="fb-page"
        data-href="https://www.facebook.com/bfirenovations/"
        data-tabs
        data-width="500"
        data-height="300"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/bfirenovations/"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/bfirenovations/">BFI Renovations</a>
        </blockquote>
      </div>
    </div>
  )
}
