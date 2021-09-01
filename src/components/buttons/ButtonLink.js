import { NavLink } from 'react-router-dom';

export const ButtonLink = ({
  className = 'btn',
  text = '',
  href,
  children,
}) => {
  return (
    <NavLink to={href} className={className} exact>
      {children}
      {text !== '' ? <span className="btn__text">{text}</span> : null}
    </NavLink>
  );
};
