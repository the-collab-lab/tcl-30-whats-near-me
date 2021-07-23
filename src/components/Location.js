import defaultLocationImg from '../assets/default-location.svg';

export const Location = ({ location }) => {
  const { pageid, title, description, thumbnail, coordinates } = location;
  const dist = typeof coordinates[0] === 'undefined' ? 0 : coordinates[0].dist;
  const imgSrc =
    typeof thumbnail === 'undefined' ? defaultLocationImg : thumbnail.source;

  return (
    <li className="page">
      <div className="page__info">
        <figure className="page__cover">
          <img className="page__image" src={imgSrc} alt={title} />
          <figcaption className="page__figcaption">{dist} Km.</figcaption>
        </figure>
        <div className="page__location">
          <h2 className="page__title">{title}</h2>
          <p className="page__description">{description}</p>
        </div>
        <div className="page__actions">
          <a
            href={`https://en.wikipedia.org/?curid=${pageid}`}
            className="page__link"
          >
            <i className="fas fa-info-circle"></i>
          </a>
        </div>
      </div>
    </li>
  );
};
