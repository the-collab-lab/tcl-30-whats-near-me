import React, { useContext } from 'react';
import { SearchResultsContext } from './SearchResults';

const List = () => {
  const { data } = useContext(SearchResultsContext);
  return <h1>List</h1>;
};

export default List;
