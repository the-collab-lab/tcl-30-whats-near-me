import React from 'react';

import GoogleMapReact from 'google-map-react';

const Map = ({ data }) => {
  const { centerCoords, zoom } = data;

  const handleApiLoaded = (map, maps, data) => {
    if (data && data.query.pages.length > 0) {
      data.query.pages.forEach((location) => {
        const { coordinates, pageid: id } = location;

        const image = {
          url:
            location.thumbnail?.source ||
            `${process.env.PUBLIC_URL}/placeholder.png`,
          size: new maps.Size(24, 24),
          origin: new maps.Point(0, 0),
          anchor: new maps.Point(0, 24),
        };

        new maps.Marker({
          map,
          position: { lat: coordinates[0].lat, lng: coordinates[0].lon },
          animation: maps.Animation.DROP,
          icon: image,
          id,
        });
      });
    }
  };

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
            yesIWantToUseGoogleMapApiInternals={true}
            onGoogleApiLoaded={({ map, maps }) =>
              handleApiLoaded(map, maps, data)
            }
          ></GoogleMapReact>
        </div>
      </div>
    </>
  );
};

export default Map;
