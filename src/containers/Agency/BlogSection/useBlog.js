import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocale } from '../../../hooks/locale';

function useMenu() {
  
  const { locale } = useLocale();
  const { allMarkdownRemark } = useStaticQuery(query);

  // Only return menu for the current locale
  const node = allMarkdownRemark.edges.filter(
    item => item.node.fields.locale === locale
  );

  return node;
}

export default useMenu;

const query = graphql`
  query useBlog {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex: "/(news)\/.*[.]md$/"}
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 6
    ) {
      edges {
        node {
          frontmatter {
            toptitle
            title
            featureImage {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: FULL_WIDTH)
              }
            }
            image {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: FULL_WIDTH)
              }
            }
            date(formatString: "DD/MM/YYYY")

          }
          timeToRead
          fields {
            locale
            slug
          }
        }
      }
    }
  }
`;
