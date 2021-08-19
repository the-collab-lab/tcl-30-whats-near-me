import { useContext, useState } from 'react';
import { GoogleMapsContext } from '../context/GoogleMapsContext';
import { MapCenterContext } from '../context/MapCenterContext';
import planetSearch from '../assets/search-location-solid.svg';

export const SearchForm = () => {
  const [query, setQuery] = useState('');
  const valueGoogleMapsAPI = useContext(GoogleMapsContext);
  const valueMapCenter = useContext(MapCenterContext);
  const { map, maps } = valueGoogleMapsAPI;
  const { setNewCenterMap } = valueMapCenter;

  const handleQuery = (e) => setQuery(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

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
      {maps !== null ? (
        <form onSubmit={handleSubmit} className="search">
          <label htmlFor="query" className="search__label">
            Place or address:
          </label>
          <input
            className="search__input"
            type="search"
            id="query"
            name="query"
            value={query}
            onChange={handleQuery}
            placeholder="Search place name or address"
            maxLength="40"
            required
          />
          <button type="submit" className="search__button">
            <img
              src={planetSearch}
              alt="search icon"
              className="search__icon"
            />
          </button>
        </form>
      ) : null}
    </>
  );
};
