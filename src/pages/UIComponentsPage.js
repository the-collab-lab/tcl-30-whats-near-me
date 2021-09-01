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
          <Button onClick={() => alert('Share location')}>
            <ShareLocationIcon className="icon" />
          </Button>
          <Button onClick={() => alert('Fly to me')}>
            <FlyToMeIcon className="icon" />
          </Button>
          <Button onClick={() => alert('Search place')}>
            <SearchPlaceIcon className="icon" />
          </Button>
          <Button onClick={() => alert('Close')}>
            <CloseIcon className="icon" />
          </Button>
        </div>
      </section>
      <br />
      <section>
        <h2>NavLinks (as Buttons)</h2>
        <br />
        <div className="icons">
          <Button href="/" text="Map" className="btn btn--link">
            <MapIcon className="icon" />
          </Button>
          <Button href="/list" text="List" className="btn btn--link">
            <ListIcon className="icon" />
          </Button>
          <Button href="/settings" className="btn">
            <SettingsIcon className="icon" />
          </Button>
          <Button href="/help" className="btn">
            <HelpIcon className="icon" />
          </Button>
        </div>
      </section>
    </div>
  );
};
