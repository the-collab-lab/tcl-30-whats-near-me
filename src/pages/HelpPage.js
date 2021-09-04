import { HeaderNav } from '../components/HeaderNav';
import { ReactComponent as ShareLocationIcon } from '../assets/share-location-icon.svg';
import { ReactComponent as SearchPlaceIcon } from '../assets/search-place-icon.svg';
import { ReactComponent as SettingsIcon } from '../assets/settings-icon.svg';
import { Button } from '../components/Button';

export const HelpPage = () => {
  return (
    <>
      <HeaderNav />
      <main className="view__content">
        <h1 className="view__title">HELP</h1>
        <section className="help__section">
          <h2 className="help__subtitle">What's near me?</h2>
          <p className="help__description">
            It's an application to help you to find places around you and you
            can share your location and discover new places.
          </p>
        </section>
        <section className="help__section">
          <h2 className="help__subtitle">Features</h2>
          <ul className="help__features">
            <li className="help__feature">
              <Button
                className="btn btn__icon active"
                label="Share location"
                icon={ShareLocationIcon}
              />
              <span className="help__details">Share your location.</span>
            </li>
            <li className="help__feature">
              <Button
                className="btn btn__icon active"
                label="Search Place"
                icon={SearchPlaceIcon}
              />
              <span className="help__details">
                Find a place by name or address.
              </span>
            </li>
            <li className="help__feature">
              <Button
                className="btn btn__icon active"
                label="Settings"
                icon={SettingsIcon}
              />
              <span className="help__details">
                Settings, adjust how frequency you can get new data.
              </span>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};
