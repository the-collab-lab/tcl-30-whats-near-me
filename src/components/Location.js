import defaultLocationImg from '../assets/default-location.svg';
import { ReactComponent as MapMarkerIcon } from '../assets/map-marker-icon.svg';
import { ReactComponent as InfoIcon } from '../assets/info-icon.svg';
import { Button } from './Button';
import { convertDistanceMts, MEASUREMENTS } from '../helpers/helpersAPI';

export const Location = ({ location, measurement }) => {
  const { pageid, title, description, thumbnail, coordinates } = location;
  const dist = typeof coordinates[0] === 'undefined' ? 0 : coordinates[0].dist;
  const imgSrc =
    typeof thumbnail === 'undefined' ? defaultLocationImg : thumbnail.source;

  return (
    <li className="location">
      <figure className="location__cover">
        <img className="location__image" src={imgSrc} alt={title} />
      </figure>
      <div className="location__details">
        <h2 className="location__title">{title}</h2>
        <p className="location__description">{description}</p>
        <div className="location__info">
          <span className="location__distance">
            <MapMarkerIcon />
            <p className="location__value">
              {convertDistanceMts(dist, MEASUREMENTS.METER)} {measurement}
            </p>
          </span>
        </div>
      </div>
      <Button
        href={`https://en.wikipedia.org/?curid=${pageid}`}
        className="btn btn__link--icon location__link"
        icon={InfoIcon}
        label="Info button"
        isLinkExternal={true}
      />
    </li>
  );
};
