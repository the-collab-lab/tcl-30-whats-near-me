import React, { useContext, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';
import Pin from './Pin';
import UserLocationPin from './UserLocationPin';
import DialogBody from './DialogBody';
import { MapCenterContext } from '../context/MapCenterContext';

export const Map = ({
  defaultCenterMap,
  centerMap,
  locations = [],
  zoom = 16,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [locationDetails, setLocationDetails] = useState(null);
  const valueCenterMap = useContext(MapCenterContext);
  const { setNewCenterMap, locationShared } = valueCenterMap;

  const handleApiLoaded = () => {
    setLoaded(true);
  };

  const handleClick = (location) => {
    setLocationDetails(location);
  };

  const handleClose = () => {
    setLocationDetails(null);
  };

  const handleCenterMoved = (event) => {
    const lat = event?.center?.lat();
    const lng = event?.center?.lng();
    const newMapCenter = { lat, lng };
    setNewCenterMap(newMapCenter);
  };

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyCbfV0IAdkkGv-9mmuAkUJNzCPPfGRO6v0',
        }}
        defaultCenter={defaultCenterMap}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals={true}
        onGoogleApiLoaded={handleApiLoaded}
        center={centerMap}
        onDragEnd={(event) => handleCenterMoved(event)}
      >
        {navigator.geolocation && locationShared === 'yes' ? (
          <UserLocationPin
            lat={setNewCenterMap.lat}
            lng={setNewCenterMap.lng}
          />
        ) : null}
        {locations.length > 0 && loaded
          ? locations.map((location) => {
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
      </GoogleMapReact>

      {locationDetails ? (
        <Dialog
          className="dialog"
          aria-label="Location details"
          onDismiss={handleClose}
        >
          <DialogBody onClick={handleClose} locationDetails={locationDetails} />
        </Dialog>
      ) : null}
    </div>
  );
};
