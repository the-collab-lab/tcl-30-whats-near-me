import React from 'react';

const ErrorMessage = ({ error }) => (
  <div className="search__error">
    <h2>{error ? 'Something went wrong' : null}</h2>
  </div>
);

export default ErrorMessage;
