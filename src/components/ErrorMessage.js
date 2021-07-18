import React from 'react';

const ErrorMessage = ({ error }) => (
  <div className="search__error">
    <h2 className="search__error__title">
      {error ? 'Something went wrong' : 'No entries found'}
    </h2>
  </div>
);

export default ErrorMessage;
