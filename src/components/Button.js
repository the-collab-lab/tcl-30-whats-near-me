import { NavLink } from 'react-router-dom';

export function Button({
  className = 'btn',
  disabled = false,
  text,
  href,
  onClick,
  icon,
}) {
  const ButtonIcon = icon;

  return (
    <>
      {href ? (
        <NavLink to={href} className={className} exact>
          <ButtonIcon className="icon" />
          {text ? <span className="btn__text">{text}</span> : null}
        </NavLink>
      ) : (
        <button className="btn" onClick={onClick} disabled={disabled}>
          <ButtonIcon className="icon" />
        </button>
      )}
    </>
  );
}
