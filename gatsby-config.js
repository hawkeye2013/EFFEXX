const siteMetadata = {
  title: `Programming For Humans`,
  description: `Learn how to program!`,
  image: `/default-site-img.jpg`,
  siteUrl: `https://programming.for-humans.io`,
  siteLanguage: `en`,
  siteLocale: `en_us`,
  twitterUsername: `@TuckerHawkinson`,
  authorName: `Tucker Hawkinson`
};

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-mdx`,
      gatsbyRemarkPlugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 540
          }
        }
      ],
      plugin: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 540
          }
        }
      ]
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`
      }
    }
  ]
};
