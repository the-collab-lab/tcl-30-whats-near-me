import { HeaderNav } from '../components/HeaderNav';
import { ReactComponent as ShareLocationIcon } from '../assets/share-location-icon.svg';
import { ReactComponent as SearchPlaceIcon } from '../assets/search-place-icon.svg';
import { ReactComponent as SettingsIcon } from '../assets/settings-icon.svg';
import { ReactComponent as AppleIcon } from '../assets/apple-icon.svg';
import { ReactComponent as AndroidIcon } from '../assets/android-icon.svg';
import { ReactComponent as CloseIcon } from '../assets/close-icon.svg';
import { Button } from '../components/Button';
import { useState } from 'react';
import Dialog from '@reach/dialog';
import { ReactVideo } from 'reactjs-media';

const PLATFORMS = {
  IOS: 'iOS',
  ANDROID: 'Android',
};

export const HelpPage = () => {
  const [platform, setPlatform] = useState(PLATFORMS.IOS);
  const [showDialogVideo, setShowDialogVideo] = useState(false);
  const handleClose = () => setShowDialogVideo(false);
  const showIOSVideo = () => {
    setPlatform('iOS');
    setShowDialogVideo(true);
  };
  const showAndroidVideo = () => {
    setPlatform('Android');
    setShowDialogVideo(true);
  };

  return (
    <>
      <HeaderNav />
      <main className="view__content">
        <h1 className="view__title">HELP</h1>
        <section className="help__section">
          <h2 className="help__subtitle">What's Near Me?</h2>
          <p className="help__description">
            This is an application to help you to find places! You can also
            choose to share your location and discover new places as you travel
            around.
          </p>
        </section>
        <section className="help__section">
          <h2 className="help__subtitle">Installation</h2>
          <div className="help__buttons">
            <Button
              className="btn btn__icon active"
              label="iOS installation"
              icon={AppleIcon}
              onClick={showIOSVideo}
            />

            <Button
              className="btn btn__icon active"
              label="Android installation"
              icon={AndroidIcon}
              onClick={showAndroidVideo}
            />
          </div>
          <div className="instructions">
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
          <div className="instructions">
            <h3>Android Instructions</h3>
            <ul>
              <li>1. Open Google Chrome</li>
              <br />
              <li>2. Settings</li>
              <br />
              <li>3. Click on 'Add home screen'</li>
              <br />
              <li>4. Accept to add your PWA in your phone</li>
              <br />
              <li>5. Close browser</li>
              <br />
              <li>6. Open "What's Near Me?" app</li>
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
                Use settings to adjust how frequently your device refreshes with
                new data.
              </span>
            </li>
          </ul>
        </section>
      </main>

      {showDialogVideo ? (
        <Dialog
          className="dialog"
          aria-label="Location details"
          onDismiss={handleClose}
        >
          <div className="dialog__header">
            <Button
              className="btn btn__icon dialog__button dialog__button--close"
              label="Close"
              icon={CloseIcon}
              onClick={handleClose}
            />
          </div>
          <div className="help__video">
            {platform === PLATFORMS.IOS ? (
              <>
                <ReactVideo
                  src="https://res.cloudinary.com/images-alex-projects/video/upload/v1630726401/videos/tcl-30/ios_vxpcdb.mp4"
                  autoPlay
                  primaryColor="#264653"
                  poster="https://res.cloudinary.com/images-alex-projects/image/upload/v1630728009/videos/tcl-30/cover-video_gpn5et.png"
                />
                <performance>Android</performance>
              </>
            ) : (
              <>
                <ReactVideo
                  src="https://res.cloudinary.com/images-alex-projects/video/upload/v1630729219/videos/tcl-30/android-video_mscqxp.mp4"
                  autoPlay
                  primaryColor="#264653"
                  poster="https://res.cloudinary.com/images-alex-projects/image/upload/v1630728009/videos/tcl-30/cover-video_gpn5et.png"
                />
                <p>Android</p>
              </>
            )}
          </div>
        </Dialog>
      ) : null}
    </>
  );
};
