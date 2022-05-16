import React from 'react';
import { ThemeProvider } from 'styled-components';
import { saasModernTheme } from '../common/theme/saasModern';
import { ResetCSS } from '../common/assets/css/style';
import {
  GlobalStyle,
  ContentWrapper,
} from '../containers/SaasModern/sassModern.style';
import Sticky from 'react-stickynode';
import { DrawerProvider } from '../common/contexts/DrawerContext';
import Navbar from '../containers/SaasModern/Navbar';
import Footer from '../containers/SaasModern/Footer/simple';

const Layout = ({ children }) => {

  return (
    <ThemeProvider theme={saasModernTheme}>
      <>
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          {children}
          <Footer />
        </ContentWrapper>
      </>
    </ThemeProvider>
  )
};

export { Layout };
