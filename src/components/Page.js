import React from 'react';

const Page = ({ page }) => {
  const { pageid, title, thumbnail } = page;
  return (
    <div>
      <h1>{title}</h1>
      {thumbnail ? (
        <img src={thumbnail.source} alt={title} />
      ) : (
        <p>no image available</p>
      )}
      <p>{pageid}</p>
    </div>
  );
};

export default Page;
