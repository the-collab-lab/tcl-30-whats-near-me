import React from 'react';

const ErrorMessage = ({ error }) => (
  <div className="search__error">
    <h2>{error ? 'Something went wrong' : null}</h2>
    <pre>{JSON.stringify(error)}</pre>
    <pre>{JSON.stringify(error?.message)}</pre>
  </div>
);

export default ErrorMessage;
