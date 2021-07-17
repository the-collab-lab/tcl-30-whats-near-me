import React from 'react';
import { usePages } from '../hooks/usePages';
import Page from './Page';

const List = () => {
  const centerMap = {
    lat: 48.8566,
    lng: 2.3522,
  };
  const { pages, loading } = usePages(centerMap);

  console.log(pages);
  return (
    <div>
      <h1>List</h1>
      <div className="pages">
        {loading && <p>Loading... </p>}

        {pages.map((page) => (
          <Page key={page.pageid} page={page} />
        ))}
      </div>
    </div>
  );
};
export default List;
