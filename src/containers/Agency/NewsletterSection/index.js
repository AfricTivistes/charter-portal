import React from 'react';
import Mailchimp from 'react-mailchimp-form'
import PropTypes from 'prop-types';
import Box from '../../../common/components/Box';
import Heading from '../../../common/components/Heading';
import Container from '../../../common/components/UI/Container';
import NewsletterSectionWrapper, {
  NewsletterForm,
} from './newsletterSection.style';

import useTranslations from '../../../components/useTranslations';

const NewsletterSection = ({ sectionHeader, sectionTitle}) => {
  const {
    newsletterTitle,
    emailAddress,
    sendButton,
    newsletterSending,
    newsletterSuccess,
    newsletterError,
    newsletterEmpty,
    newsletterDuplicate,
    newsletterAction
  } = useTranslations();

  return (
    <NewsletterSectionWrapper id="newsletterSection">
      <Container>
        <Box {...sectionHeader}>
          <Heading content={newsletterTitle} {...sectionTitle} />
        </Box>
        <Box>
          <NewsletterForm>
            <Mailchimp
              action={newsletterAction}
              fields={[
                {
                  name: 'EMAIL',
                  placeholder: emailAddress,
                  type: 'email',
                  required: true
                }
              ]}
              messages={
                {
                  sending: newsletterSending,
                  success: newsletterSuccess,
                  error: newsletterError,
                  empty: newsletterEmpty,
                  duplicate: newsletterDuplicate,
                  button: sendButton,
                }
              }
              className="mailchimp"
            />
          </NewsletterForm>
          
        </Box>
      </Container>
    </NewsletterSectionWrapper>
  );
};

// NewsletterSection style props
NewsletterSection.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
};

// NewsletterSection default style
NewsletterSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: '56px',
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
};

export default NewsletterSection;
