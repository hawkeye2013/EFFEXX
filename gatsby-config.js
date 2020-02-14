module.exports = {
  siteMetadata: {
    title: `Programming For Humans`,
    description: `Learn how to program!`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`
      }
    },
    `gatsby-plugin-mdx`
  ]
};
