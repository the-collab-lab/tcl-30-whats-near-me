import React from 'react';
import { usePages } from '../hooks/usePages';
import Page from './Page';

const List = () => {
  const lat = 48.8566;
  const lng = 2.3522;
  const { pages, loading } = usePages(lat, lng);

  return (
    <div>
      <h1>List</h1>
      {loading && <p>Loading... </p>}
      {pages?.length === 0 ? (
        <p>List is empty</p>
      ) : (
        <ul className="pages">
          {pages.map((page) => (
            <Page key={page.pageid} page={page} />
          ))}
        </ul>
      )}
    </div>
  );
};
export default List;
