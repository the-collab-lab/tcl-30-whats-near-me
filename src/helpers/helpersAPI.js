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

const MEASUREMENTS = {
  METER: 'mts.',
  KILOMETERS: 'kms.',
  MILES: 'miles.',
};

const convertDistanceMts = (distanceInMts = 0, measurement = 'miles') => {
  let result = distanceInMts;

  switch (measurement) {
    case MEASUREMENTS.METERS:
      result = distanceInMts;
      break;
    case MEASUREMENTS.KILOMETERS:
      result = distanceInMts / 1000;
      break;
    case MEASUREMENTS.MILES:
      result = distanceInMts * 0.000621371;
      break;
    default:
      result = distanceInMts;
      break;
  }

  return result.toFixed(2);
};

export {
  getLocationsFromResponseAPI,
  sortLocationsByDistance,
  MEASUREMENTS,
  convertDistanceMts,
};
