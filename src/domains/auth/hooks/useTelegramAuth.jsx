import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AuthCallback from '../api/authCallback';


export const useTelegramAuth = ({ auth, login }) => {
  const location = useLocation();

  useEffect(() => {
    if (!auth) return;

    const params = new URLSearchParams(location.search);

    if (params.get('id')) {
      AuthCallback(params.toString()).then((data) => {
        login(data);

        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        );
      });
    }
  }, [location.search, auth, login]);
};