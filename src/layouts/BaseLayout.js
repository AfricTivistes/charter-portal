import React, { useEffect } from 'react';
import { useLocale } from '../hooks/locale';

const BaseLayout = ({ children, pageContext: { locale } }) => {
  // Using the useLocale() hook to define the correct locale 
  // that will be available in all components of the tree thought its context
  const { changeLocale } = useLocale();
  
  useEffect(() => {
    if (locale) {
      changeLocale(locale);
    }
  }, [locale])

  return (
    <>
      {children}
    </>
  )
};

export { BaseLayout };
