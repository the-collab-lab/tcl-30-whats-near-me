import { HeaderNav } from '../components/HeaderNav';
import { ReactComponent as ShareLocationIcon } from '../assets/share-location-icon.svg';
import { ReactComponent as SearchPlaceIcon } from '../assets/search-place-icon.svg';
import { ReactComponent as SettingsIcon } from '../assets/settings-icon.svg';
import { ReactComponent as AppleIcon } from '../assets/apple-icon.svg';
import { ReactComponent as AndroidIcon } from '../assets/android-icon.svg';
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
          <h2 className="help__subtitle">Installation</h2>
          <div className="help__buttons">
            <Button
              className="btn btn__icon active"
              label="iOS installation"
              icon={AppleIcon}
            />

            <Button
              className="btn btn__icon active"
              label="Android installation"
              icon={AndroidIcon}
            />
          </div>
          <div className="instructions__ios">
            <h3>iOS Instructions</h3>
            <ul>
              <li>
                1. Navigate to the app via Safari. Note that Chrome will not
                work on iOS devices at this time for this process.
              </li>
              <br />
              <li>2. Click the "Share" icon.</li>
              <br />
              <li>3. Scroll down to and select "Add to Home Screen".</li>
              <br />
              <li>4. Click "Add" in the upper right corner.</li>
              <br />
              <li>
                5. You will now find "What's Near Me?" on the home screen of
                your device!
              </li>
            </ul>
          </div>
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
