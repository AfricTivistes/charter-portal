import React from 'react';
import useTranslations from '../useTranslations';
import SocialLinks from '../SocialLinks';

import * as S from './styled';

const Footer = () => {
  const {
    aboutProject,
    seeMorePWA,
    maintainedBy,
    contributeMessage,
  } = useTranslations();

  return (
    <S.FooterWrapper>
      <S.FooterContainer>
        <SocialLinks />
        <p>
          {aboutProject}{' '}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"
            target="_blank"
            rel="noopener noreferrer"
          >
            {seeMorePWA}
          </a>
          .
        </p>
        <p>
          {maintainedBy}{' '}
          <a
            href="https://twitter.com/_diogorodrigues"
            target="_blank"
            rel="noopener noreferrer"
          >
            @_diogorodrigues
          </a>
          . {contributeMessage}{' '}
          <a
            href="https://github.com/diogorodrigues/iceberg-gatsby-multilang"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          .
        </p>
      </S.FooterContainer>
    </S.FooterWrapper>
  );
};

export default Footer;
