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
      MENU_ITEMS: item.node.translations.MENU_ITEMS,
    };
  });

  // Only return menu for the current locale
  const { MENU_ITEMS } = simplified.filter(
    lang => lang.name === locale,
  )[0];

  return MENU_ITEMS;
}

export default useMenu;

const query = graphql`
  query useMenuItems {
    rawData: allFile(filter: { sourceInstanceName: { eq: "menu" } }) {
      edges {
        node {
          name
          translations: childMenuJson {
            MENU_ITEMS {
              label
              path
              offset
            }
          }
        }
      }
    }
  }
`;
