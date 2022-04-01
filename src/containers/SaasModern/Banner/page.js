import React from 'react';
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from '../../../common/components/Box';
import Text from '../../../common/components/Text';
import Heading from '../../../common/components/Heading';
import Container from '../../../common/components/UI/Container';
import TiltShape from '../TiltShape';
import { BannerWrapper } from './banner.style';

const BannerSection = ({
  row,
  contentWrapper,
  title,
  description,
  imageWrapper,
  bannerTitle,
  bannerDescription,
  bannerImage

}) => {

  const image = getImage(bannerImage);

  return (
    <BannerWrapper id="banner_section">
      <TiltShape />
      <Container className="page">
        <Box {...row}>
          <Box {...contentWrapper}>
            <Heading
              {...title}
              content={bannerTitle}
            />
            <Text
              {...description}
              content={bannerDescription}
            />
          </Box>
          <Box {...imageWrapper}>
            <Fade bottom>
              <GatsbyImage
                image={image}
                alt="banner image"
              />
            </Fade>
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  row: PropTypes.object,
  contentWrapper: PropTypes.object,
  discountAmount: PropTypes.object,
  discountText: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  imageWrapper: PropTypes.object,
  buttonWrapper: PropTypes.object,
  button: PropTypes.object,
  fillButton: PropTypes.object,
  sectionWrapper: PropTypes.object
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    width: ['100%', '100%', '80%', '55%', '100%'],
    mb: '40px',
  },
  imageWrapper: {
    width: '100%',
  },
  title: {
    fontSize: ['24px', '32px', '40px', '42px', '46px'],
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px', '25px', '25px', '25px'],
    lineHeight: '1.2',
    textAlign: ['center', 'left'],
    pl: ['0px', '100px']
  },
  description: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: '#fff',
    lineHeight: '1.75',
    mb: '0',
    pl: ['0px', '100px'],
    pr: ['0px', '100px']
  },
  discountAmount: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '700',
    color: '#4F1F37',
    mb: 0,
    as: 'span',
    mr: '0.4em',
  },
  discountText: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '700',
    color: '#fff',
    mb: 0,
    as: 'span',
  },
  fillButton: {
    type: 'button',
    fontSize: ['13px', '14px'],
    fontWeight: '600',
    borderRadius: '4px',
    p: ['0px 15px', '8px 22px'],
    colors: 'secondaryWithBg',
    minWidth: ['auto', '150px'],
    height: ['40px', '46px'],
    minHeight: 'auto',
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: 'center',
    mt: '35px',
  },
  button: {
    type: 'button',
    fontSize: ['13px', '14px'],
    fontWeight: '600',
    borderRadius: '4px',
    p: ['0px 15px', '8px 22px'],
    color: '#fff',
    colors: 'secondary',
    height: ['40px', '46px'],
    minHeight: 'auto',
  },
};

export default BannerSection;
