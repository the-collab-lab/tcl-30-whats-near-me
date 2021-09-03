import { ReactComponent as SearchPlaceIcon } from '../assets/search-place-icon.svg';
import { useContext } from 'react';
import { GoogleMapsContext } from '../context/GoogleMapsContext';
import { MapCenterContext } from '../context/MapCenterContext';
import { Button } from './Button';

export const SearchForm = () => {
  const valueGoogleMapsAPI = useContext(GoogleMapsContext);
  const valueMapCenter = useContext(MapCenterContext);
  const { map, maps, query, setQuery } = valueGoogleMapsAPI;
  const { setNewCenterMap } = valueMapCenter;

  const handleQuery = (e) => setQuery(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (maps === null) {
      alert('Google Maps is not loaded yet. Please, try again, later.');
      return false;
    }

    const request = {
      query,
      fields: ['name', 'geometry'],
    };

    const service = new maps.places.PlacesService(map);

    service.findPlaceFromQuery(request, function (results, status) {
      const { REQUEST_DENIED, ZERO_RESULTS, OK } =
        maps.places.PlacesServiceStatus;

      switch (status) {
        case REQUEST_DENIED:
          alert(
            'We are so sorry! Places API is not enabled. Please try again later.',
          );
          break;

        case ZERO_RESULTS:
          alert('No matching results');
          break;

        case OK:
          const coordinates = results[0]?.geometry?.location;
          const lat = coordinates.lat();
          const lng = coordinates.lng();
          const newMapCenter = { lat, lng };
          setNewCenterMap(newMapCenter);
          break;

        default:
          console.log(status);
          break;
      }
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="search">
        <input
          className="search__input"
          type="search"
          id="query"
          name="query"
          value={query}
          onChange={handleQuery}
          placeholder="Search for a place or address"
          maxLength="40"
          aria-label="Place or address"
          required
        />
        <Button
          type="submit"
          className="btn btn__icon"
          label="Search place"
          icon={SearchPlaceIcon}
        />
      </form>
    </>
  );
};
