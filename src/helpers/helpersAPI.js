const getLocationsFromResponseAPI = (response = null) => {
  if (response === null) return response;

  const { query } = response;
  const pages = typeof query === 'undefined' ? [] : query.pages;
  return typeof pages === 'undefined' ? [] : pages;
};

const sortLocationsByDistance = (locations = []) => {
  if (locations.length === 0) return locations;

  return locations.sort((a, b) => {
    return a.coordinates[0].dist - b.coordinates[0].dist;
  });
};

export { getLocationsFromResponseAPI, sortLocationsByDistance };
