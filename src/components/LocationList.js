import { Location } from './Location';

export const LocationList = ({ locations = [] }) => {
  if (locations.length === 0) return <p>List is empty.</p>;

  return (
    <ul className="list__locations">
      {locations?.map((location) => (
        <Location key={location.pageid} location={location} />
      ))}
    </ul>
  );
};
