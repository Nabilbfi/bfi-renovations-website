module.exports = {
  siteMetadata: {
    title: "Ottawa Home Renovation Contractor",
    titleTemplate: "%s - BFI Renovations",
    description:
      "BFI Renovations is a top-rated Ottawa Home Renovation contractor servicing Ottawa, ON and surrounding areas. Call 613-620-4340 to get a free quote today!",
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
