import React, { useContext, useState } from 'react';

import GoogleMapReact from 'google-map-react';

import { SearchResultsContext } from './SearchResults';

import Pin from './Pin';

const Map = () => {
  const [loaded, setLoaded] = useState(false);
  const { data } = useContext(SearchResultsContext);
  const { centerCoords, zoom } = data;

  const handleApiLoaded = () => {
    setLoaded(true);
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
            onGoogleApiLoaded={handleApiLoaded}
          >
            {data?.query?.pages?.length > 0 && loaded
              ? data.query.pages.map((location) => {
                  const { coordinates, pageid: id } = location;
                  return (
                    <Pin
                      key={id}
                      lat={coordinates[0].lat}
                      lng={coordinates[0].lon}
                      imageUrl={
                        location?.thumbnail?.source ||
                        `${process.env.PUBLIC_URL}/placeholder.png`
                      }
                      title={
                        location?.thumbnail?.source
                          ? location.title
                          : 'placeholder-image'
                      }
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
