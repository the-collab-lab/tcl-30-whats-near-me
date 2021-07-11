import React from 'react';

import GoogleMapReact from 'google-map-react';

const Map = () => {
  const defaultProps = {
    center: {
      lat: 48.8566,
      lng: 2.3522,
    },
    zoom: 11,
  };

  return (
    <div className="map">
      <h1>What's Near Me?</h1>
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCbfV0IAdkkGv-9mmuAkUJNzCPPfGRO6v0' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        ></GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
