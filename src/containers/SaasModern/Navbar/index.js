import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import NavbarWrapper from '../../../common/components/Navbar';
import Drawer from '../../../common/components/Drawer';
import Button from '../../../common/components/Button';
import Logo from '../../../common/components/UIElements/Logo';
import Box from '../../../common/components/Box';
import HamburgMenu from '../../../common/components/HamburgMenu';
import Container from '../../../common/components/UI/Container';
import { DrawerContext } from '../../../common/contexts/DrawerContext';
import ScrollSpyMenu from '../../../common/components/ScrollSpyMenu';
import Languages from '../../../common/components/Languages';

import LogoImage from '../../../common/assets/image/saasModern/logo-white.png';
import LogoImageAlt from '../../../common/assets/image/saasModern/logo.png';

import useMENU from './useMENU_ITEMS';
import useTranslations from '../../../components/useTranslations';

const Navbar = ({ navbarStyle, logoStyle, button, row, menuWrapper, langWrapper }) => {
  const MENU_ITEMS = useMENU();
  const {
    callAction,
    urlAction
  } = useTranslations();
  
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  return (
    <NavbarWrapper {...navbarStyle} className="saas_navbar">
      <Container>
        <Box {...row}>
          <Logo
            href="/"
            logoSrc={LogoImage}
            title="Portfolio"
            logoStyle={logoStyle}
            className="main-logo"
          />
          <Logo
            href="/"
            logoSrc={LogoImageAlt}
            title="Portfolio"
            logoStyle={logoStyle}
            className="logo-alt"
          />
          <Box {...langWrapper} className="language_menu">
            <Languages />
          </Box>
          <Box {...menuWrapper}>
            <ScrollSpyMenu
              className="main_menu"
              menuItems={MENU_ITEMS}
              offset={-70}
            />
            <a href={urlAction} className="navbar_button">
              <Button {...button} title={callAction} />
            </a>
            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu barColor="#fff" />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <ScrollSpyMenu
                className="mobile_menu"
                menuItems={MENU_ITEMS}
                drawerClose={true}
                offset={-100}
              />
              <a href={urlAction} className="navbar_drawer_button">
                <Button {...button} title={callAction} />
              </a>
            </Drawer>
          </Box>
        </Box>
      </Container>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  button: PropTypes.object,
  row: PropTypes.object,
  menuWrapper: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    minHeight: '70px',
    display: 'block',
  },
  row: {
    flexBox: true,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logoStyle: {
    maxWidth: ['180px', '200px'],
  },
  button: {
    type: 'button',
    fontSize: '13px',
    fontWeight: '700',
    borderRadius: '4px',
    pl: '15px',
    pr: '15px',
    colors: 'secondaryWithBg',
    minHeight: 'auto',
    height: '40px',
  },
  menuWrapper: {
    flexBox: true,
    alignItems: 'center',
  },
  langWrapper: {
    flexBox: true,
    alignItems: 'center',
    mt: '30px'
  }
};

export default Navbar;
