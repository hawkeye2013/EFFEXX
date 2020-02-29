import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { Layout } from '../components/Layout';
import SEO from 'react-seo-component';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import styled from 'styled-components';
import { H1, A } from '../components/pageElements';

const LinkContainerStyles = styled.main`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const linkStyles = {
  backgroundColor: '#ffffff',
  padding: '10px',
  borderRadius: '5px',
  color: '#212121'
};

const Image = styled(Img)`
  border-radius: 5px;
`;

const Subheading = styled.p`
  display: flex;
  flex-direction: row;
  font-size: 1.3rem;
`;

export default ({ data, pageContext }) => {
  const {
    siteUrl,
    image,
    siteLanguage,
    siteLocale,
    twitterUsername,
    authorName
  } = useSiteMetadata();
  const { frontmatter, body, fields, excerpt } = data.mdx;
  const { title, date, cover } = frontmatter;
  const { previous, next } = pageContext;
  return (
    <Layout>
      <SEO
        title={title}
        titleTemplate={'Programming For Humans'}
        description={excerpt}
        image={
          cover === null ? `${siteUrl}${image}` : `${siteUrl}${cover.publicURL}`
        }
        pathname={`${siteUrl}${fields.slug}`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        author={authorName}
        article={true}
        publishedDate={date}
        modifiedDate={new Date(Date.now()).toISOString()}
      />
      <H1>{frontmatter.title}</H1>
      <Subheading>
        <A href={frontmatter.authorWebsite}>{frontmatter.author} </A>
        <p> - {frontmatter.date}</p>
      </Subheading>

      {!!frontmatter.cover ? (
        <Image sizes={frontmatter.cover.childImageSharp.fluid} />
      ) : null}

      <MDXRenderer>{body}</MDXRenderer>
      <LinkContainerStyles>
        {previous === false ? null : (
          <>
            {previous && (
              <Link to={previous.fields.slug} style={linkStyles}>
                <p>{previous.frontmatter.title}</p>
              </Link>
            )}
          </>
        )}
        {next === false ? null : (
          <>
            {next && (
              <Link to={next.fields.slug} style={linkStyles}>
                <p>{next.frontmatter.title}</p>
              </Link>
            )}
          </>
        )}
      </LinkContainerStyles>
    </Layout>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        authorWebsite
        date(formatString: "YYYY MMMM Do")
        cover {
          publicURL
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
      excerpt
      fields {
        slug
      }
    }
  }
`;
