import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from "gatsby-plugin-image";
import useTranslations from '../useTranslations';

import * as S from './styled';

const PostItem = ({
  slug,
  background,
  category,
  date,
  timeToRead,
  title,
  description,
  image,
}) => {
  const { toRead } = useTranslations();

  const { listImages } = useStaticQuery(
    graphql`
      query {
        listImages: allFile {
          edges {
            node {
              childImageSharp {
                gatsbyImageData(
                  width: 600
                  height: 350
                  placeholder: BLURRED
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
      }
    `,
  );

  const postImgCover = listImages.edges.find(img => {
    return img.node.childImageSharp.gatsbyImageData.images.fallback.src.includes('cover');
  });

  const imgName = image ? image.childImageSharp.gatsbyImageData.images.fallback.src.split('/')[4] : false;

  const postImg = imgName
    ? listImages.edges.find(img => {
      return img.node.childImageSharp.gatsbyImageData.images.fallback.src.includes(imgName);
      })
    : false;

  const imageDefault = getImage(postImg.node)
  const imageCover = getImage(postImgCover.node)

  return (
    <S.PostItemLink to={slug}>
      <S.PostItemWrapper>
        {postImg && (
          <S.PostItemImg
            image={imageDefault}
            alt={title}
          />
        )}
        {!postImg && (
          <S.PostItemImg
            image={imageCover}
            alt={title}
          />
        )}

        <S.PostItemInfo>
          <S.PostItemTag background={background}>
            {category}
          </S.PostItemTag>
          <S.PostItemDate>
            {date} • {timeToRead} min {toRead}
          </S.PostItemDate>
          <S.PostItemTitle>{title}</S.PostItemTitle>
          <S.PostItemDescription>{description}</S.PostItemDescription>
        </S.PostItemInfo>
      </S.PostItemWrapper>
    </S.PostItemLink>
  );
};

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PostItem;
