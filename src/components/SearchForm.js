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

    var request = {
      query,
      fields: ['name', 'geometry'],
    };

    var service = new maps.places.PlacesService(map);

    service.findPlaceFromQuery(request, function (results, status) {
      console.log({ status });
      if (status === maps.places.PlacesServiceStatus.OK) {
        // console.log({ results })
        if (results.length === 0) {
          alert('No matching results');
        } else {
          const firstResult = results[0];
          setNewCenterMap(firstResult?.geometry?.location);
        }
      }
    });
  };

  return (
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
        maxLength="20"
      />
      <button type="submit" className="search__button">
        <img src={planetSearch} alt="search icon" className="search__icon" />
      </button>
    </form>
  );
};
