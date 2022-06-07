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
    ) {
      edges {
        node {
          frontmatter {
            title
            social {
              icon
              url
            }
            featureImage {
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
