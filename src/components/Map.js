import React from 'react';

import GoogleMapReact from 'google-map-react';

const Map = () => {
  const { center, zoom, key } = {
    center: {
      lat: 48.8566,
      lng: 2.3522,
    },
    zoom: 11,
    key: 'AIzaSyCbfV0IAdkkGv-9mmuAkUJNzCPPfGRO6v0',
  };

  return (
    <>
      <h1>What's Near Me?</h1>
      <div className="view__content">
        <div className="map">
          <GoogleMapReact
            bootstrapURLKeys={{ key }}
            defaultCenter={center}
            defaultZoom={zoom}
          />
        </div>
      </div>
    </>
  );
};

export default Map;
