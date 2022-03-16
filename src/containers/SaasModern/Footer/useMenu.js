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
      FOOTER_WIDGET: item.node.translations.FOOTER_WIDGET,
    };
  });

  // Only return menu for the current locale
  const { FOOTER_WIDGET } = simplified.filter(
    lang => lang.name === locale,
  )[0];

  return FOOTER_WIDGET;
}

export default useMenu;

const query = graphql`
  query useFooterItems {
    rawData: allFile(filter: { sourceInstanceName: { eq: "menu" } }) {
      edges {
        node {
          name
          translations: childMenuJson {
            FOOTER_WIDGET {
              title
              menuItems {
                text
                url
              }
            }
          }
        }
      }
    }
  }
`;
