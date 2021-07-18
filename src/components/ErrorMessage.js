import React from 'react';

const ErrorMessage = ({ error }) => (
  <div className="search__error">
    <h2>{error ? 'Something went wrong' : 'Not found'}</h2>
  </div>
);

export default ErrorMessage;
