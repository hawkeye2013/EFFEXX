module.exports = {
  siteMetadata: {
    title: `EFFEXX`,
    description: `This is my coding blog!`
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
