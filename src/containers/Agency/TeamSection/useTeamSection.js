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
  query useTeam {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex: "/(granted)\/.*[.]md$/"}
      }
      sort: { fields: [frontmatter___project], order: DESC }
      limit: 6
    ) {
      edges {
        node {
          frontmatter {
            name
            project
            social {
              icon
              url
            }
            image {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: FULL_WIDTH)
              }
            }
          }
          fields {
            locale
            slug
          }
        }
      }
    }
  }
`;
