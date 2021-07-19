import parisLocationData from '../data/paris.json';
import zeroLocationData from '../data/zero.json';

export const fixturesnearby = (centerMap) => {
  if (centerMap.lat === 0 && centerMap.lng === 0) return zeroLocationData;
  if (centerMap.lat === 48.8566 && centerMap.lng === 2.3522)
    return parisLocationData;
  return zeroLocationData;
};
