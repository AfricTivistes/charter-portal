import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import { Layout } from '../layouts/Layout-SaasModern';
import BannerSection from '../containers/SaasModern/Banner/page';
import Container from '../common/components/UI/Container';
import Box from '../common/components/Box';
import TrialSection from '../containers/SaasModern/Trial';

const Post = ({ row, contentWrapper, ...props }) => {
  const post = props.data.markdownRemark;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      />
      <BannerSection 
        bannerToptitle={post.frontmatter.toptitle}
        bannerTitle={post.frontmatter.title}
        bannerDescription={post.frontmatter.description}
        bannerImage={post.frontmatter.image} />
      <Container>
        <Box {...row}>
          <Box {...contentWrapper}>
          <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </Box>
      </Box>
      </Container >
      <TrialSection />
    </Layout >
  );
};

export const query = graphql`
  query Post($locale: String!, $title: String!) {
    markdownRemark(
      frontmatter: { title: { eq: $title } }
      fields: { locale: { eq: $locale } }
    ) {
      frontmatter {
        toptitle
        title
        description
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH,, width: 1170)
          }
        }
      }
      html
    }
  }
`;

Post.propTypes = {
  row: PropTypes.object,
  contentWrapper: PropTypes.object,
};

Post.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    width: ['100%', '100%', '80%', '55%', '100%'],
    mb: '40px',
  }
}

export default Post;
