module.exports = {
  siteMetadata: {
    title: `Phillip Lanzetta Portfolio`,
    description: `Creative Shopify development, tailored to your needs.`,
    author: `@phillanzetta`,
    twitterUsername: `@phillanzetta`,
    image: `/twitter-img.png`,
    siteUrl: `https://philliplanzetta.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        collectionTypes: [`projects`, `blogs`],
        singleTypes: [`about`],
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Phillip Lanzetta Portfolio`,
        short_name: `Phillip Lanzetta`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/pl.png`, // This path is relative to the root of the site.
      },
    },
  ],
}