import React from 'react';
import { useLocale } from '../../../hooks/locale';
import logoFR from '../../../common/assets/image/saasModern/fundedFR.png';
import logoEN from '../../../common/assets/image/saasModern/fundedEN.png';

const logo = {
    fr: logoFR,
    en: logoEN
};

function useLogo() {
    // Grab the locale (passed through context) from the Locale Provider 
    // through useLocale() hook
    const { locale } = useLocale();
    
    return logo[locale];
}

export default useLogo;