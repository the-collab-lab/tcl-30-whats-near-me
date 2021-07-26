import Pin from './Pin';
import GoogleMapReact from 'google-map-react';
import { useContext, useState } from 'react';
import { MapCenterContext } from '../context/MapCenterContext';
import { LocationsContext } from '../context/LocationsContext';

export const Map = ({ lat, lng, zoom = 16 }) => {
  const [loaded, setLoaded] = useState(false);
  const defaultCenterMap = { lat: 48.8566, lng: 2.3522 };
  const valueLocations = useContext(LocationsContext);
  const { locations } = valueLocations;
  const valueCenterMap = useContext(MapCenterContext);
  const { newCenterMap, setNewCenterMap } = valueCenterMap;

  const handleApiLoaded = () => {
    setLoaded(true);
  };

  const centerMoved = (event) => {
    const lat = event?.center?.lat();
    const lng = event?.center?.lng();
    const newMapCenter = { lat, lng };

    setTimeout(() => {
      setNewCenterMap(newMapCenter);
    }, 5000);
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
        center={newCenterMap}
        onDragEnd={(event) => centerMoved(event)}
      >
        {locations?.length > 0 && loaded
          ? locations?.map((location) => {
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
