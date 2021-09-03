import { ReactComponent as SearchPlaceIcon } from '../assets/search-place-icon.svg';
import { ReactComponent as SettingsIcon } from '../assets/settings-icon.svg';
import { ReactComponent as HelpIcon } from '../assets/help-icon.svg';
import { ReactComponent as CloseIcon } from '../assets/close-icon.svg';
import { Button } from './Button';
import { SearchForm } from './SearchForm';
import { useContext, useState } from 'react';
import { GoogleMapsContext } from '../context/GoogleMapsContext';

export const HeaderSearch = ({ children }) => {
  const [showSearchForm, setShowSearchForm] = useState(false);
  const valueGoogleMapsAPI = useContext(GoogleMapsContext);
  const { setQuery } = valueGoogleMapsAPI;
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
        <Button
          href="/settings"
          className="btn btn__link--icon"
          icon={SettingsIcon}
          label="Settings button"
        />
        <Button
          href="/help"
          className="btn btn__link--icon"
          icon={HelpIcon}
          label="Help button"
        />
        {children}
      </div>
    </header>
  );
};
