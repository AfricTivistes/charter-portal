import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from '../common/contexts/DrawerContext';
import { saasModernTheme } from '../common/theme/saasModern';
import { ResetCSS } from '../common/assets/css/style';
import {
  GlobalStyle,
  ContentWrapper,
} from '../containers/SaasModern/sassModern.style';

import BannerSection from '../containers/SaasModern/Banner';
import Navbar from '../containers/SaasModern/Navbar';
import WorkingProcessSection from '../containers/SaasModern/WorkingProcess';
import BlogSection from '../containers/Agency/BlogSection';
import PartnerSection from '../containers/SaasModern/Partner';
import FaqSection from '../containers/SaasModern/Faq';
import ClientsSection from '../containers/Portfolio/Clients';
import InfoSection from '../containers/SaasModern/Info';
import FeatureSection from '../containers/SaasModern/Feature';
import UpdateScreen from '../containers/SaasModern/UpdateScreen';
import TestimonialSection from '../containers/SaasModern/Testimonial';
import TrialSection from '../containers/SaasModern/Trial';
import Footer from '../containers/SaasModern/Footer';
import Seo from '../components/seo';
import useTranslations from '../components/useTranslations';
import NewsletterSection from '../containers/Agency/NewsletterSection';

const App = () => {

  const {
    home
  } = useTranslations();

  return (
    <ThemeProvider theme={saasModernTheme}>
      <Fragment>
        <Seo title={home} />

        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <WorkingProcessSection />
          <InfoSection />
          <FeatureSection />
          <UpdateScreen />
          <BlogSection />
          <PartnerSection />
          <TestimonialSection />
          <FaqSection />
          <ClientsSection />
          <NewsletterSection />
          <TrialSection />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};

export default App;