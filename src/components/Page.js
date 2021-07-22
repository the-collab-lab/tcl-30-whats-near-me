const Page = ({ page }) => {
  const { pageid, title, description, thumbnail, coordinates } = page;
  const dist = coordinates[0] === undefined ? 0 : coordinates[0].dist;

  return (
    <li className="page">
      <div className="page__info">
        {thumbnail ? (
          <figure className="page__cover">
            <img className="page__image" src={thumbnail.source} alt={title} />
            <figcaption className="page__figcaption">{dist} Km.</figcaption>
          </figure>
        ) : (
          <div className="page__cover">
            <i className="fas fa-image page__image--icon"></i>
            <p className="page__distance">{dist} Km.</p>
          </div>
        )}
        <div className="page__location">
          <h2 className="page__title">{title}</h2>
          <p className="page__description">{description}</p>
        </div>
        <div className="page__actions">
          <a
            href={`https://en.wikipedia.org/?curid=${pageid}`}
            className="page__link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
    </li>
  );
};

export default Page;
