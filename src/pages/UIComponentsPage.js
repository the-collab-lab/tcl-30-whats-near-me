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

export const UIComponentsPage = () => {
  return (
    <div>
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
        </div>
      </section>
    </div>
  );
};
