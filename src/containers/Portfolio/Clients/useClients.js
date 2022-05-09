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
      CLIENTS: item.node.translations.CLIENTS,
    };
  });

  // Only return menu for the current locale
  const { CLIENTS } = simplified.filter(
    lang => lang.name === locale,
  )[0];

  return CLIENTS;
}

export default useMenu;

const query = graphql`
  query useCLIENTS {
    rawData: allFile(filter: { sourceInstanceName: { eq: "menu" } }) {
      edges {
        node {
          name
          translations: childMenuJson {
            CLIENTS {
              title
              url
              image {
                  publicURL
              }
            }
          }
        }
      }
    }
  }
`;
