import styled from 'styled-components';
import BannerBG from '../../../common/assets/image/saasModern/banner-texture.png';

export const BannerWrapper = styled.section`
  padding: 150px 0 50px 0;
  background-image: url(${BannerBG}),
    linear-gradient(35deg, rgb(69, 26, 38) 0%, rgb(79, 31, 55) 100%);
  background-size: cover;
  background-position: top center;
  @media (max-width: 575px) {
    padding: 120px 0 0 0;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;
