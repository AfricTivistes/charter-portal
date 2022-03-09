import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get'
import { Link } from 'gatsby';

export const LanguageLink = styled(Link)`
  display: block;
  color: ${themeGet('colors.labelColor')};
  margin-right: 0.5rem;
  text-decoration: none;

  &.is-active {
    font-weight: bold;
    color: ${themeGet('colors.secondary')};
  }
`;
