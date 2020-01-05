module.exports = {
  siteMetadata: {
    title: "piaic clone with gatsby",
    author: "mubashir , umair, jawwad , aman ",
    description: `ninja bootcamp piaic clone website`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: 'iwqz96z0crdj',
        accessToken: "dnxNI_w6VyKs8-ZoMs1OfD92Ysy2DeQkduzadtVjrng"
      }
    },
      "gatsby-plugin-sass",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}