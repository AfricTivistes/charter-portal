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
  query useFeature {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex: "/(activities)\/.*[.]md$/"}
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
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