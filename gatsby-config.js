require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Coffee Sapiens",
    description: "Welcome to coffee life by anagh pal and friends",
    siteUrl: `https://www.yourdomain.tld`,
    image: `src/images/logo.jpg`, // Path to your default image
    twitterUsername: "@yourtwitterhandle",
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'Inter:400,500,600,700', // weights for Inter font
          'Roboto:400,500,700',    // weights for Roboto font
          'Righteous:400'          // single weight for Righteous
        ],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Coffee Sapiens`,
        short_name: `Coffee Sapiens`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/images/logo.jpg`, // Path to your favicon file
      },
    },
   
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
