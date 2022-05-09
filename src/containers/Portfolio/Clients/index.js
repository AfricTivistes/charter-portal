import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../../common/components/Box';
import Text from '../../../common/components/Text';
import Heading from '../../../common/components/Heading';
import Image from '../../../common/components/Image';
import Container from '../../../common/components/UI/Container';
import { ClientsImage } from './clients.style';

import useClients from './useClients'
import useTranslations from '../../../components/useTranslations';

const ClientsSection = ({
  sectionWrapper,
  secTitleWrapper,
  secTitle,
  secDescription,
  row,
}) => {
  
  const CLIENTS = useClients();
  const {
    clientsTitle,
    clientsDescription
  } = useTranslations();

  return (
    <Box {...sectionWrapper} as="section">
      <Container noGutter width="1200px">
        <Box {...secTitleWrapper}>
          <Heading {...secTitle} content={clientsTitle} />
          <Text
            {...secDescription}
            content={clientsDescription}
          />
        </Box>
        <Box {...row}>
          {CLIENTS.map((item, index) => (
            <a href={item.url} key={index} target="_blank" rel="noreferrer">
              <ClientsImage key={`client-${index}`}>
                <Image
                  src={item.image.publicURL}
                  alt={item.title}
                  title={item.title}
                />
              </ClientsImage>
            </a>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

ClientsSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  row: PropTypes.object,
};

ClientsSection.defaultProps = {
  sectionWrapper: {
    pt: ['40px', '60px', '80px', '80px', '80px'],
    pb: ['60px', '80px', '100px', '130px', '130px'],
  },
  secTitleWrapper: {
    mb: '60px',
  },
  secTitle: {
    fontSize: ['22px', '26px', '26px', '30px', '30px'],
    fontWeight: '700',
    color: '#302b4e',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '20px'],
    textAlign: 'center',
  },
  secDescription: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    mb: '0',
    textAlign: 'center',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default ClientsSection;
