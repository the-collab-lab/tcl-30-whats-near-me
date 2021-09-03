import defaultLocationImg from '../assets/default-location.svg';
import { ReactComponent as MapMarkerIcon } from '../assets/map-marker-icon.svg';

export const Location = ({ location }) => {
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
            <p className="location__value">{dist} Km.</p>
          </span>
          <a
            href={`https://en.wikipedia.org/?curid=${pageid}`}
            className="location__link"
            aria-label={`Read more about ${title}`}
          >
            <i className="fas fa-info-circle"></i> Information
          </a>
        </div>
      </div>
    </li>
  );
};
