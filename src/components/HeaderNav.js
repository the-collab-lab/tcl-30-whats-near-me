import { ReactComponent as SettingsIcon } from '../assets/settings-icon.svg';
import { ReactComponent as HelpIcon } from '../assets/help-icon.svg';
import { Button } from './Button';

export const HeaderNav = () => {
  return (
    <div className="header__nav">
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
  );
};
