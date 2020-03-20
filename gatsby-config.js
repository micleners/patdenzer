module.exports = {
  siteMetadata: {
    title: `Pat Denzer VA`,
    description: `Pat Denzer, Virtual Assistant. Creating flow for your business.`,
    author: `Pat Denzer`,
  },
  plugins: [
    `gatsby-background-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [`Open Sans`, `Heebo`, `Lato\:200,300,400,600`, `Gill Sans\:200,300,400,600`],
    //     display: "swap",
    //   },
    // },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto Mono`,
            variants: [`200`, `400`, `600`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
