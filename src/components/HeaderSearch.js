import { ReactComponent as SearchPlaceIcon } from '../assets/search-place-icon.svg';
import { ReactComponent as CloseIcon } from '../assets/close-icon.svg';
import { Button } from './Button';
import { SearchForm } from './SearchForm';
import { useContext, useState } from 'react';
import { GoogleMapsContext } from '../context/GoogleMapsContext';
import { HeaderNav } from './HeaderNav';

export const HeaderSearch = ({ children }) => {
  const [showSearchForm, setShowSearchForm] = useState(false);
  const valueGoogleMapsAPI = useContext(GoogleMapsContext);
  const { setQuery } = valueGoogleMapsAPI;
  const showHeaderNav = !showSearchForm;
  const handleShowSearchForm = () => {
    setShowSearchForm(!showSearchForm);
    setQuery('');
  };

  return (
    <header className="header">
      <div className="header__column">
        {showSearchForm ? <SearchForm /> : null}
      </div>
      <div className="header__column">
        <Button
          className="btn btn__icon"
          label={showSearchForm ? 'Close' : 'Search place'}
          icon={showSearchForm ? CloseIcon : SearchPlaceIcon}
          onClick={handleShowSearchForm}
        />
        {showHeaderNav ? <HeaderNav /> : null}
      </div>
      {children}
    </header>
  );
};
