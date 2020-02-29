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
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          // `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              withWebp: true,
              tracedSVG: true
            }
          },
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
              rel: `noopener`
            }
          }
        ]
      }
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-32580864-4',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**', '/do-not-track/me/too/'],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0
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
