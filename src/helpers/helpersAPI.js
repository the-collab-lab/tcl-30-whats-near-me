const getLocationsFromResponseAPI = (response = null) => {
  if (response === null) return [];
  if (typeof response.data === 'undefined') return [];
  if (typeof response.data.query === 'undefined') return [];

  const { query } = response.data;
  const pages = typeof query.pages === 'undefined' ? [] : query.pages;

  return typeof pages === 'undefined' ? [] : pages;
};

const sortLocationsByDistance = (locations = []) => {
  if (locations.length === 0) return locations;

  return locations.sort((a, b) => {
    return a.coordinates[0].dist - b.coordinates[0].dist;
  });
};

export { getLocationsFromResponseAPI, sortLocationsByDistance };
