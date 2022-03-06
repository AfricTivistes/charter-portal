import React from 'react';
import useMenu from '../useMenu';
import useTranslations from '../useTranslations';
import { useLocale } from '../../hooks/locale';
import locales from '../../../config/i18n';

import * as S from './styled';

const Navigation = ({ isActive, handleToggleMenu }) => {
  const menuItems = useMenu();
  const { button } = useTranslations();

  const { locale } = useLocale();

  return (
    <>
      <S.Navigation>
        {menuItems.map((menu, index) => (
          <S.NavigationLink
            to={locales[locale].default ? menu.link : `/${locale}${menu.link}`}
            aria-label={menu.name}
            activeClassName="active"
            key={`${menu.link}${index}`}
            >
            {menu.name}
          </S.NavigationLink>
        ))}

        <S.NavigationButton to="" aria-label="Login">
          {button}
        </S.NavigationButton>
      </S.Navigation>
    </>
  );
};

export default Navigation;
