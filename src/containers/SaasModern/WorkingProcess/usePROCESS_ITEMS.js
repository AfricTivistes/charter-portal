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
      PROCESS_ITEMS: item.node.translations.PROCESS_ITEMS,
    };
  });

  // Only return menu for the current locale
  const { PROCESS_ITEMS } = simplified.filter(
    lang => lang.name === locale,
  )[0];

  return PROCESS_ITEMS;
}

export default useMenu;

const query = graphql`
  query usePROCESSITEMS {
    rawData: allFile(filter: { sourceInstanceName: { eq: "menu" } }) {
      edges {
        node {
          name
          translations: childMenuJson {
            PROCESS_ITEMS {
              title
              description
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
