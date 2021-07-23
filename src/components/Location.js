import defaultLocationImg from '../assets/default-location.svg';

export const Location = ({ location }) => {
  const { pageid, title, description, thumbnail, coordinates } = location;
  const dist = typeof coordinates[0] === 'undefined' ? 0 : coordinates[0].dist;
  const imgSrc =
    typeof thumbnail === 'undefined' ? defaultLocationImg : thumbnail.source;

  return (
    <li className="location">
      <div className="location__info">
        <figure className="location__cover">
          <img className="location__image" src={imgSrc} alt={title} />
          <figcaption className="location__figcaption">{dist} Km.</figcaption>
        </figure>
        <div className="location__location">
          <h2 className="location__title">{title}</h2>
          <p className="location__description">{description}</p>
        </div>
        <div className="location__actions">
          <a
            href={`https://en.wikipedia.org/?curid=${pageid}`}
            className="location__link"
          >
            <i className="fas fa-info-circle"></i>
          </a>
        </div>
      </div>
    </li>
  );
};
