import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../../common/components/Box';
import Text from '../../../common/components/Text';
import Heading from '../../../common/components/Heading';
import Button from '../../../common/components/Button';
import Image from '../../../common/components/Image';
import Container from '../../../common/components/UI/Container';

import PartnerSectionWrapper from './partner.style';
import Partner from '../../../common/assets/image/saasModern/partner.jpg';

import useTranslations from '../../../components/useTranslations';

const PartnerSection = ({
  row,
  col,
  title,
  description,
  button,
  textArea,
  imageArea,
}) => {

  const {
    partnerTitle,
    partnerDescription,
    partnerButton,
  } = useTranslations();

  return (
    <PartnerSectionWrapper>
      <Container>
        <Box {...row}>
          <Box {...col} {...imageArea}>
            <Image src={Partner} alt="Domain Image" />
          </Box>
          <Box {...col} {...textArea}>
            <Heading
              {...title}
              content={partnerTitle}
            />
            <Text
              {...description}
              content={partnerDescription}
            />
            <Box>
              <a href="#1">
                <Button {...button} title={partnerButton} />
              </a>
            </Box>
          </Box>
        </Box>
      </Container>
    </PartnerSectionWrapper>
  );
};

PartnerSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  textArea: PropTypes.object,
  imageArea: PropTypes.object,
};

PartnerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  imageAreaRow: {
    flexDirection: 'row-reverse',
  },
  col: {
    pr: '15px',
    pl: '15px',
  },
  textArea: {
    width: ['100%', '100%', '55%', '50%', '42%'],
  },
  imageArea: {
    width: ['100%', '100%', '45%', '50%', '58%'],
    mb: ['40px', '40px', '0', '0', '0'],
  },
  title: {
    fontSize: ['26px', '30px', '30px', '48px', '48px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '15px',
    lineHeight: '1.25',
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px',
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'secondaryWithBg',
    minWidth: '150px',
  },
};

export default PartnerSection;
