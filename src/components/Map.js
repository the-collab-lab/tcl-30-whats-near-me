import React from 'react';

import GoogleMapReact from 'google-map-react';

import Pin from './Pin';

const Map = ({ data }) => {
  const { centerCoords, zoom } = data;

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
          >
            {data && data.query.pages.length > 0
              ? data.query.pages.map((location) => {
                  const { coordinates, pageid: id } = location;
                  return (
                    <Pin
                      key={id}
                      lat={coordinates[0].lat}
                      lng={coordinates[0].lon}
                      imageUrl={
                        location?.thumbnail?.source ||
                        `${process.env.PUBLIC_URL}/map-icon.png`
                      }
                      title={Location.title}
                    />
                  );
                })
              : null}
          </GoogleMapReact>
        </div>
      </div>
    </>
  );
};

export default Map;
