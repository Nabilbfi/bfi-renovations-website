module.exports = {
  siteMetadata: {
    title: "company name",
    titleTemplate: "%s · company information",
    description: "meta description",
    url: "https://www.example.com", // No trailing slash allowed!
    image: "/images/logo.svg", // Path to your image you placed in the 'static' folder
    twitterUsername: "",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
  ],
}
