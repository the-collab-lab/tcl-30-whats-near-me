import React, { useContext, useState } from 'react';

import GoogleMapReact from 'google-map-react';
import { Dialog } from '@reach/dialog';

import { SearchResultsContext } from '../context/SearchResults';

import Pin from './Pin';
import DialogBody from './DialogBody';

const Map = () => {
  const [loaded, setLoaded] = useState(false);
  const [locationDetails, setLocationDetails] = useState(null);
  const { data } = useContext(SearchResultsContext);
  const { centerCoords, zoom } = data;

  const handleApiLoaded = () => {
    setLoaded(true);
  };

  const handleClick = (location) => {
    setLocationDetails(location);
  };

  const handleClose = () => {
    setLocationDetails(null);
  };

  return (
    <>
      <h1>What's Near Me?</h1>
      <div className="view__content">
        <div className="map">
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
                      alt={location?.thumbnail?.source ? location.title : ''}
                      onClick={() => {
                        handleClick(location);
                      }}
                    />
                  );
                })
              : null}
            {locationDetails && (
              <Dialog className="dialog" aria-label="Location details"></Dialog>
            )}
          </GoogleMapReact>
        </div>
      </div>
    </>
  );
};

export default Map;
