import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../../common/components/Box';
import Text from '../../../common/components/Text';
import Heading from '../../../common/components/Heading';
import Logo from '../../../common/components/UIElements/Logo';
import Container from '../../../common/components/UI/Container';
import FooterWrapper, { List, ListItem } from './footer.style';

import LogoImage from '../../../common/assets/image/saasModern/logo.png';
import LogoAU from '../../../common/assets/image/saasModern/auweblogo.webp';

import useTranslations from '../../../components/useTranslations';

const Footer = ({
  row,
  col,
  colOne,
  colTwo,
  colThree,
  titleStyle,
  logoStyle,
  textStyle,
}) => {

  const {
    trialDescription,
    footerBuild
  } = useTranslations();

  return (
    <FooterWrapper>
      <Container className="footer_container">
        <Box className="row" {...row}>
          <Box {...colOne}>
            <Logo
              href="#"
              logoSrc={LogoImage}
              title="Hosting"
              logoStyle={logoStyle}
            />
            <a href="mailto:info@charter.africa">
              <Text content="info@charter.africa" {...textStyle} />
            </a>
          </Box>
          {/* End of footer logo column */}
          <Box {...colTwo}>
              <Box className="col" {...col} key="footer-widget-1">
              <Text content={trialDescription} {...textStyle} />
              <Heading content={footerBuild} {...titleStyle} />
                <List>
                    <ListItem key="footer-list-item-1">
                      <a href="#" className="ListItem">
                        Privacy policy
                      </a>
                    </ListItem>
                </List>
              </Box>
          </Box>
          {/* End of footer List column */}
          <Box {...colThree}>
            <Logo
              href="#"
              logoSrc={LogoAU}
              title="European Union"
              logoStyle={logoStyle}
            />
          </Box>
        </Box>
      </Container>
    </FooterWrapper>
  );
};

// Footer style props
Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
  titleStyle: PropTypes.object,
  textStyle: PropTypes.object,
  logoStyle: PropTypes.object,
};

// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: ['wrap', 'wrap', 'nowrap'],
    ml: '-15px',
    mr: '-15px',
  },
  // Footer col one style
  colOne: {
    width: [1, '35%', '35%', '23%'],
    mt: [0, '13px'],
    mb: ['30px', 0],
    pl: ['15px', 0],
    pr: ['15px', '15px', 0],
  },
  // Footer col two style
  colTwo: {
    width: ['100%'],
    flexBox: true,
    flexWrap: 'wrap',
  },
  colThree: {
    width: [1, '35%', '35%', '23%'],
    mt: [0, '13px'],
    mb: ['30px', 0],
    pl: ['15px', '20px'],
    pr: ['15px', '15px', 0],
  },
  // Footer col default style
  col: {
    width: ['100%'],
    pl: '15px',
    pr: '15px',
    mb: '30px',
  },
  // widget title default style
  titleStyle: {
    color: '#343d48',
    fontSize: '16px',
    fontWeight: '700',
    mb: '30px',
  },
  // Default logo size
  logoStyle: {
    width: '130px',
    mb: '15px',
  },
  // widget text default style
  textStyle: {
    color: '#0f2137',
    fontSize: '16px',
    mb: '10px',
  },
};

export default Footer;
