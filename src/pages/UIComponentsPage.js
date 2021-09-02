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
import { Button } from '../components/Button';

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
        </div>
      </section>
      <br />
      <section>
        <h2>Icons (as Buttons)</h2>
        <br />
        <div className="icons">
          <Button
            label="Share location button"
            icon={ShareLocationIcon}
            onClick={() => alert('Share location')}
          />
          <Button
            label="Fly to me button"
            icon={FlyToMeIcon}
            onClick={() => alert('Fly to me')}
          />
          <Button
            label="Search place button"
            icon={SearchPlaceIcon}
            onClick={() => alert('Search place')}
          />
          <Button
            label="Close button"
            icon={CloseIcon}
            onClick={() => alert('Close')}
          />
        </div>
      </section>
      <br />
      <section>
        <h2>NavLinks (as Buttons)</h2>
        <br />
        <div className="icons">
          <Button
            href="/"
            text="Map"
            className="btn btn--link"
            icon={MapIcon}
            label="Map button"
          />
          <Button
            href="/list"
            text="List"
            className="btn btn--link"
            icon={ListIcon}
            label="List button"
          />
          <Button
            href="/settings"
            className="btn"
            icon={SettingsIcon}
            label="Settings button"
          />
          <Button
            href="/help"
            className="btn"
            icon={HelpIcon}
            label="Help button"
          />
        </div>
      </section>
    </div>
  );
};
