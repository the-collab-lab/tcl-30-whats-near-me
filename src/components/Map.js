import React from 'react';

import GoogleMapReact from 'google-map-react';

const Map = ({ data }) => {
  const { centerCoords, zoom } = data;
  console.log('data', data);
  return (
    <>
      <h1>What's Near Me?</h1>
      <div className="map">
        <div className="map__inner">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyCbfV0IAdkkGv-9mmuAkUJNzCPPfGRO6v0',
            }}
            defaultCenter={centerCoords}
            defaultZoom={zoom}
          />
        </div>
      </div>
    </>
  );
};

export default Map;
