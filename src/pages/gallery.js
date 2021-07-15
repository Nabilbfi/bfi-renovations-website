import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { GridTwo, Section, Container } from "../components/layoutComponents"
import Banner from "../components/banners/bannerBasic"
import AllGallery from "../components/gallery/allGallery"

import BannerImg from "../images/banner.png"

const Text = styled.div`
  text-align: center;
  max-width: 70ch;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`

export default function Gallery() {
  return (
    <Layout>
      <Banner img={BannerImg} title="Project Gallery" />
      <Section>
        <Container className="spacing-lg">
          <Text className="spacing">
            <h1 className="title">our home renovations gallery</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
              nostrum optio unde animi ipsum eius officiis dolores perspiciatis,
              libero, similique, culpa magnam laudantium? Nisi ab assumenda
              sunt. Itaque aperiam cumque quod laborum beatae quis deleniti
              voluptatum, reprehenderit, doloribus error tempore?
            </p>
          </Text>
          <AllGallery />
        </Container>
      </Section>
    </Layout>
  )
}
