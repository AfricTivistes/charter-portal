import React from 'react';
import {Link} from 'gatsby'
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import PropTypes from 'prop-types';
import Box from '../../../common/components/Box';
import Text from '../../../common/components/Text';
import Heading from '../../../common/components/Heading';
import FeatureBlock from '../../../common/components/FeatureBlock';
import Container from '../../../common/components/UI/Container';

import useTranslations from '../../../components/useTranslations';
import locales from '../../../../config/i18n';
import useFeature from './useFeature'

const FeatureSection = ({
  sectionWrapper,
  secTitleWrapper,
  secText,
  secHeading,
  row,
  col,
  FeatureItemStyle,
  iconStyle,
  contentStyle,
  featureTitle,
  featureDescription,
}) => {
  const Data = useFeature();

  const {
    featTitle,
    featDescription,
  } = useTranslations();

  return (
    <Box {...sectionWrapper} as="section" id="feature_section">
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} content={featTitle} />
          <Heading {...secHeading} content={featDescription} />
        </Box>

        <Box {...row}>
          {Data.map((item, index) => {

            const { title, description, featureImage } = item.node.frontmatter
            const { locale, slug } = item.node.fields
            const link = `/activity/${slug}`
            const imagepath = getImage(featureImage)
          
          return(<Box {...col} key={`feature-item-${index}`}>
              <FeatureBlock
                icon={
                <Link href={locales[locale].default ? link : `/${locale}${link}`} >
                  <GatsbyImage
                    image={imagepath}
                    alt={`feature-item-icon-${index + 1}`}
                  />
                </Link>
                }
                wrapperStyle={FeatureItemStyle}
                iconStyle={iconStyle}
                contentStyle={contentStyle}
                iconPosition="left"
                title={
                  <Link href={locales[locale].default ? link : `/${locale}${link}`} >
                    <Heading content={title} {...featureTitle} />
                  </Link>
                }
                description={
                  <Link href={locales[locale].default ? link : `/${locale}${link}`} >
                    <Text content={description} {...featureDescription} />
                  </Link>
                }
              />
            </Box>
          )})}
        </Box>
      </Container>
    </Box>
  );
};

FeatureSection.propTypes = {
  sectionHeader: PropTypes.object,
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secText: PropTypes.object,
  secHeading: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  FeatureItemStyle: PropTypes.object,
  iconStyle: PropTypes.object,
  contentStyle: PropTypes.object,
  featureTitle: PropTypes.object,
  featureDescription: PropTypes.object,
};

FeatureSection.defaultProps = {
  sectionWrapper: {
    pt: ['50px', '50px', '50px', '50px', '50px'],
    pb: ['20px', '50px', '60px', '70px', '100px'],
  },
  secTitleWrapper: {
    mb: ['60px', '100px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#4F1F37',
    mb: '5px',
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    lineHeight: '1.67',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: ['-30px', '-30px', '-30px', '-30px', '-30px'],
    mr: ['-30px', '-30px', '-30px', '-30px', '-45px'],
  },
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3],
    pl: ['30px', '30px', '30px', '30px', '45px'],
    pr: ['30px', '30px', '30px', '30px', '45px'],
    mb: ['50px', '70px'],
  },
  FeatureItemStyle: {
    alignItems: 'center',
  },
  iconStyle: {
    width: ['90px', '90px', '90px', '75px', '90px'],
    pr: '20px',
  },
  featureTitle: {
    fontSize: ['18px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    lineHeight: '1.5',
    mb: ['10px', '15px'],
  },
  featureDescription: {
    fontSize: '15px',
    fontWeight: '400',
    color: '#5d646d',
    letterSpacing: '-0.025em',
    lineHeight: '1.88',
    mb: 0,
  },
};

export default FeatureSection;
