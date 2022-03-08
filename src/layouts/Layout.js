import React from 'react';
import GlobalStyles from '../styles/global';

import Header from '../components/Header';
import Footer from '../components/Footer';

import * as S from './styled';

const Layout = ({ children }) => {

  return (
    <>
      <GlobalStyles />
      <S.Wrapper>
        <Header />
        <S.SiteContent role="main">
          <S.Container>{children}</S.Container>
        </S.SiteContent>
        <Footer />
      </S.Wrapper>
    </>
  )
};

export { Layout };
