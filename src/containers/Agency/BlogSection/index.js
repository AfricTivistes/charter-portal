import React from 'react';
import PropTypes from 'prop-types';
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import Box from '../../../common/components/Box';
import Text from '../../../common/components/Text';
import Heading from '../../../common/components/Heading';
import Link from '../../../common/components/Link';
import FeatureBlock from '../../../common/components/FeatureBlock';
import Container from '../../../common/components/UI/Container';
import BlogSectionWrapper from './blogSection.style';

import useBlog from './useBlog'
import useTranslations from '../../../components/useTranslations';

const BlogSection = ({
  row,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  blogTitle,
  blogMeta,
}) => {
  const Blog = useBlog();
  const {
    BlogTitle,
    BlogDescription
  } = useTranslations();

  return (
    <BlogSectionWrapper id="blogSection">
      <Container>
        <Box {...sectionHeader}>
          <Text content={BlogTitle} {...sectionSubTitle} />
          <Heading
            content={BlogDescription}
            {...sectionTitle}
          />
        </Box>
        <Box className="row" {...row}>
          {Blog.map((post, index) => {

            const image = getImage(post.thumbnail_url)

            return (<FeatureBlock
              key={`post_key-${index}`}
              id={`post_id-${post.id}`}
              className="blog__post"
              icon={
                <GatsbyImage
                  image={image}
                  alt={`Blog Image ${post.id}`}
                  objectFit="cover"
                  className="blog__image"
                />
              }
              title={
                <Link href={post.postLink} {...blogTitle}>
                  {post.title}
                </Link>
              }
              description={<Text content={post.date} {...blogMeta} />}
            />
          )})}
        </Box>
      </Container>
    </BlogSectionWrapper>
  );
};

// BlogSection style props
BlogSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  blogTitle: PropTypes.object,
  blogMeta: PropTypes.object,
};

// BlogSection default style
BlogSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['40px', '56px'],
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#10ac84',
    mb: '10px',
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
  // Blog post row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-12px',
    mr: '-12px',
  },
  // Blog post title default style
  blogTitle: {
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#ffffff',
    lineHeight: '1.5',
    mb: '10px',
    letterSpacing: '-0.020em',
  },
  // Blog post description default style
  blogMeta: {
    fontSize: '16px',
    lineHeight: '1',
    color: 'rgba(255, 255, 255, 0.5)',
    mb: 0,
  },
};

export default BlogSection;