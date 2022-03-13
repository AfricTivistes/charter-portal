import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocale } from '../../../hooks/locale';

function useMenu() {
  // Grab the locale (passed through context) from the Locale Provider 
  // through useLocale() hook
  const { locale } = useLocale();
  // Query the JSON files in <rootDir>/i18n/translations
  const { rawData } = useStaticQuery(query);

  // Simplify the response from GraphQL
  const simplified = rawData.edges.map(item => {
    return {
      name: item.node.name,
      TESTIMONIALS: item.node.translations.TESTIMONIALS,
    };
  });

  // Only return menu for the current locale
  const { TESTIMONIALS } = simplified.filter(
    lang => lang.name === locale,
  )[0];

  return TESTIMONIALS;
}

export default useMenu;

const query = graphql`
  query useTESTIMONIALS {
    rawData: allFile(filter: { sourceInstanceName: { eq: "menu" } }) {
      edges {
        node {
          name
          translations: childMenuJson {
            TESTIMONIALS {
              name
              designation
              review
              title
              avatar {
                childImageSharp {
                  gatsbyImageData(quality: 100)
                }
              }
            }
          }
        }
      }
    }
  }
`;
