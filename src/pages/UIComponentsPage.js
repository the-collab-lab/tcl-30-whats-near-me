import { ReactComponent as CarIcon } from '../assets/car-icon.svg';
import { ReactComponent as TrainIcon } from '../assets/train-icon.svg';
import { ReactComponent as BicycleIcon } from '../assets/bicycle-icon.svg';
import { ReactComponent as CloseIcon } from '../assets/close-icon.svg';
import { ReactComponent as FlyToMeIcon } from '../assets/fly-to-me-icon.svg';
import { ReactComponent as ListIcon } from '../assets/list-icon.svg';
import { ReactComponent as MapIcon } from '../assets/map-icon.svg';
import { ReactComponent as SearchPlaceIcon } from '../assets/search-place-icon.svg';
import { ReactComponent as ShareLocationIcon } from '../assets/share-location-icon.svg';
import { ReactComponent as UserLocationIcon } from '../assets/user-location-icon.svg';
import { ReactComponent as SettingsIcon } from '../assets/settings-icon.svg';
import { ReactComponent as HelpIcon } from '../assets/help-icon.svg';
import { ReactComponent as MapMarkerIcon } from '../assets/map-marker-icon.svg';
import { ReactComponent as InfoIcon } from '../assets/info-icon.svg';
import { Button } from '../components/Button';
import { HeaderSearch } from '../components/HeaderSearch';

export const UIComponentsPage = () => {
  return (
    <div className="view__content">
      <h1>UI Components</h1>
      <section>
        <h2>Iconography</h2>
        <br />
        <div className="icons">
          <CarIcon />
          <TrainIcon />
          <BicycleIcon />
          <CloseIcon />
          <FlyToMeIcon />
          <ListIcon />
          <MapIcon />
          <SearchPlaceIcon />
          <ShareLocationIcon />
          <UserLocationIcon />
          <SettingsIcon />
          <HelpIcon />
          <MapMarkerIcon />
          <InfoIcon />
        </div>
      </section>
      <br />
      <section>
        <h2>Icons (as Buttons)</h2>
        <br />
        <div className="icons">
          <Button
            className="btn btn__icon"
            label="Share location"
            icon={ShareLocationIcon}
            onClick={() => alert('Share location')}
          />
          <Button
            className="btn btn__icon"
            label="Fly to me"
            icon={FlyToMeIcon}
            onClick={() => alert('Fly to me')}
          />
          <Button
            className="btn btn__icon"
            label="Search place"
            icon={SearchPlaceIcon}
            onClick={() => alert('Search place')}
          />
          <Button
            className="btn btn__icon"
            label="Close"
            icon={CloseIcon}
            onClick={() => alert('Close')}
          />
          <Button
            className="btn btn__icon"
            label="Info"
            icon={InfoIcon}
            onClick={() => alert('Info')}
          />
        </div>
      </section>
      <br />
      <section>
        <h2>NavLinks (as Buttons)</h2>
        <br />
        <div className="icons">
          <div className="icons">
            <Button
              href="/"
              text="Map"
              className="btn btn__link"
              icon={MapIcon}
              label="Map button"
            />
            <Button
              href="/list"
              text="List"
              className="btn btn__link"
              icon={ListIcon}
              label="List button"
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
          </div>
          <br />
          <div className="icons">
            <Button
              href="/"
              text="Map"
              className="btn btn__link active"
              icon={MapIcon}
              label="Map button"
            />
            <Button
              href="/list"
              text="List"
              className="btn btn__link active"
              icon={ListIcon}
              label="List button"
            />
            <Button
              href="/ui"
              text="Info"
              className="btn btn__link active"
              icon={InfoIcon}
              label="Info button"
            />
            <Button
              href="/settings"
              className="btn btn__link--icon active"
              icon={SettingsIcon}
              label="Settings button"
            />
            <Button
              href="/help"
              className="btn btn__link--icon active"
              icon={HelpIcon}
              label="Help button"
            />
            <Button
              href="/ui"
              className="btn btn__link--icon active"
              icon={InfoIcon}
              label="Info button"
            />
          </div>
        </div>
      </section>
      <br />
      <section>
        <h2>Small Components</h2>
        <br />
        <div className="components">
          <h3>HeaderSearch</h3>
          <HeaderSearch />
        </div>
      </section>
      <br />
    </div>
  );
};
