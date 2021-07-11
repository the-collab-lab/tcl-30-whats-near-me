import React from 'react';
import GoogleMapReact from 'google-map-react';

const centerCoords = {
  lat: 48.8566,
  lng: 2.3522,
};

const Map = () => (
  <div className="map">
    <h1>What's Near Me?</h1>
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCbfV0IAdkkGv-9mmuAkUJNzCPPfGRO6v0' }}
        defaultCenter={centerCoords}
        defaultZoom={11}
      ></GoogleMapReact>
    </div>
  </div>
);

export default Map;
