import { useEffect, useState } from 'react';

export const useBrowserPermissions = (namePermission = 'geolocation') => {
  const [statusPermission, setStatusPermission] = useState('denied');

  useEffect(() => {
    navigator?.permissions
      ?.query({ name: namePermission })
      .then(function (result) {
        setStatusPermission(result?.state);
      });
  }, []);

  return { statusPermission };
};
