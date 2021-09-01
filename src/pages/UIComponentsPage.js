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
          <CarIcon className="icon" />
          <TrainIcon className="icon" />
          <BicycleIcon className="icon" />
          <CloseIcon className="icon" />
          <FlyToMeIcon className="icon" />
          <ListIcon className="icon" />
          <MapIcon className="icon" />
          <SearchPlaceIcon className="icon" />
          <ShareLocationIcon className="icon" />
          <UserLocationIcon className="icon" />
          <SettingsIcon className="icon" />
          <HelpIcon className="icon" />
        </div>
      </section>
      <br />
      <section>
        <h2>Icons (as Buttons)</h2>
        <br />
        <div className="icons">
          <Button
            icon={ShareLocationIcon}
            onClick={() => alert('Share location')}
          />
          <Button icon={FlyToMeIcon} onClick={() => alert('Fly to me')} />
          <Button
            icon={SearchPlaceIcon}
            onClick={() => alert('Search place')}
          />
          <Button icon={CloseIcon} onClick={() => alert('Close')} />
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
          />
          <Button
            href="/list"
            text="List"
            className="btn btn--link"
            icon={ListIcon}
          />
          <Button href="/settings" className="btn" icon={SettingsIcon} />
          <Button href="/help" className="btn" icon={HelpIcon} />
        </div>
      </section>
    </div>
  );
};
