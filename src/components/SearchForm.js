import { useState } from 'react';

export const SearchForm = () => {
  const [query, setQuery] = useState('');
  const handleQuery = (e) => setQuery(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Searching ${query}...`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="query">Place name or address:</label>
        <input
          type="search"
          id="query"
          name="query"
          value={query}
          onChange={handleQuery}
          placeholder="Enter some Place name or address"
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
};
