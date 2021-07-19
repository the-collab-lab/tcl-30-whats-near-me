import React from 'react';

const Page = ({ page }) => {
  const { pageid, title, description, thumbnail, coordinates } = page;
  const dist = coordinates[0] === undefined ? 0 : coordinates[0].dist;

  console.log('coordinates:', coordinates);
  console.log('coordinates[0]:', coordinates[0]);
  return (
    <div className="page">
      {thumbnail ? (
        <img className="page__image" src={thumbnail.source} alt={title} />
      ) : (
        <i class="fas fa-image page__image--icon"></i>
      )}
      <h2 className="page__title">{title}</h2>
      <p className="page__description">{description}</p>
      <p>{dist} Km.</p>
      <a
        href={`https://en.wikipedia.org/?curid=${pageid}`}
        className="page__link"
        target="_blank"
        rel="noreferrer"
      >
        View on Wikipedia
      </a>
    </div>
  );
};

export default Page;
