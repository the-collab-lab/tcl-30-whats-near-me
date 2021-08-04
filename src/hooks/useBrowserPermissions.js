import { useEffect, useState } from 'react';

export const useBrowserPermissions = (namePermission = 'geolocation') => {
  const [permissionStatus, setPermissionStatus] = useState('denied');

  useEffect(() => {
    navigator?.permissions
      ?.query({ name: namePermission })
      .then(function (result) {
        setPermissionStatus(result?.state);
      });
  }, []);

  return { permissionStatus };
};
