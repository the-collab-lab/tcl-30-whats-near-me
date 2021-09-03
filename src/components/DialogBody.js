import { Button } from './Button';
import { ReactComponent as InfoIcon } from '../assets/info-icon.svg';

const DialogBody = ({ locationDetails }) => (
  <div className="dialog__body">
    <img
      className="dialog__image"
      src={
        locationDetails?.thumbnail?.source ||
        `${process.env.PUBLIC_URL}/placeholder.png`
      }
      alt={locationDetails?.thumbnail?.source ? locationDetails.title : ''}
    />
    <div className="dialog__details">
      <h2 className="dialog__name">{locationDetails.title}</h2>
      <p className="dialog__description">{locationDetails.description}</p>
      <p className="dialog__distance">
        Distance: {locationDetails.coordinates[0].dist} km
      </p>
    </div>
    <Button
      href={`https://en.wikipedia.org/?curid=${locationDetails.pageid}`}
      className="btn btn__link dialog__link"
      icon={InfoIcon}
      label={`Read more about ${locationDetails.title}`}
      isLinkExternal={true}
      text="Learn more"
    />
  </div>
);

export default DialogBody;
