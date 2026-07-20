import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import i18n from '../../../i18n.js';

export const useLanguage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [lang, setLangState] = useState('ua');

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const initialLang =
      params.get('lang') ||
      localStorage.getItem('value') ||
      'ua';

    i18n.changeLanguage(initialLang);

    setLangState(initialLang);

    localStorage.setItem('value', initialLang);
  }, [location.search]);

  const changeLanguage = (newLang) => {
    setLangState(newLang);

    i18n.changeLanguage(newLang);

    localStorage.setItem('value', newLang);

    const params = new URLSearchParams(location.search);

    params.set('lang', newLang);

    navigate(
      {
        pathname: location.pathname,
        search: params.toString(),
      },
      { replace: true }
    );
  };

  return {
    lang,
    changeLanguage,
  };
};