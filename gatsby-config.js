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
    `gatsby-plugin-sitemap`,
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
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [
            'Poppins:400,700',
            'Pridi:400,700',
            'Space Mono:400,700',
            'Ubuntu: 400,700'
          ]
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Programming For Humans`,
        short_name: 'PFH',
        start_url: `/`
      }
    },
    `gatsby-plugin-offline`
  ]
};
