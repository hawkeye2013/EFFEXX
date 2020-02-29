import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import SEO from 'react-seo-component';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { H1 } from '../components/pageElements/H1';
import { Header } from '../components/Header';

const IndexContainer = styled.main`
  max-width: 100%;
  margin: 0 auto;
  padding: 10px 25px;
`;

const IndexWrapper = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const PostWrapper = styled.main`
  width: 24%;
  margin-right: 10px;
  border-radius: 10px;
  border: 1px solid grey;
  margin-bottom: 10px;
  background-color: #ffffff;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  @media (max-width: 1500px) {
    width: 32%;
  }

  @media (max-width: 850px) {
    width: 48%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const PostCardContent = styled.main`
  padding: 10px;
`;

const Image = styled(Img)`
  border-radius: 5px;
`;

const linkStyle = {
  color: '#212121',
  textDecoration: 'none'
};

export default ({ data }) => {
  const {
    description,
    title,
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
    authorName
  } = useSiteMetadata();
  return (
    <>
      <Header siteTitle={title} siteDescription={description}></Header>
      <IndexContainer>
        <SEO
          title={title}
          titleTemplate={'Programming For Humans'}
          description={description || 'no description'}
          image={`${siteUrl}${image}`}
          pathname={siteUrl}
          siteLanguage={siteLanguage}
          siteLocale={siteLocale}
          twitterUsername={twitterUsername}
          authorName={authorName}
        />
        <IndexWrapper>
          {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
            <PostWrapper key={id}>
              <Link to={fields.slug} style={linkStyle}>
                {!!frontmatter.cover ? (
                  <Image sizes={frontmatter.cover.childImageSharp.sizes} />
                ) : null}
                <PostCardContent>
                  <H1>{frontmatter.title}</H1>
                  <p>{frontmatter.date}</p>
                  <p>{excerpt}</p>
                </PostCardContent>
              </Link>
            </PostWrapper>
          ))}
        </IndexWrapper>
      </IndexContainer>
    </>
  );
};

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
          cover {
            publicURL
            childImageSharp {
              sizes(maxWidth: 2000, traceSVG: { color: "#fafafa" }) {
                ...GatsbyImageSharpSizes_tracedSVG
              }
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`;
