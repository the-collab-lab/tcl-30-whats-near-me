import Pin from './Pin';
import GoogleMapReact from 'google-map-react';
import { useContext, useState } from 'react';
import { MapCenterContext } from '../context/MapCenterContext';

export const Map = ({
  defaultCenterMap,
  centerMap,
  locations = [],
  zoom = 16,
}) => {
  const [loaded, setLoaded] = useState(false);
  const valueCenterMap = useContext(MapCenterContext);
  const { setNewCenterMap } = valueCenterMap;

  const handleApiLoaded = () => {
    setLoaded(true);
  };

  const handleCenterMoved = (event) => {
    const lat = event?.center?.lat();
    const lng = event?.center?.lng();
    const newMapCenter = { lat, lng };

    window.setTimeout(() => {
      setNewCenterMap(newMapCenter);
    }, 1000);
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
                />
              );
            })
          : null}
      </GoogleMapReact>
    </div>
  );
};
