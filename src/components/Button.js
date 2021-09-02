import { NavLink } from 'react-router-dom';

export function Button({
  className = 'btn',
  disabled = false,
  text,
  href,
  onClick,
  icon,
  label,
}) {
  const ButtonIcon = icon;

  return (
    <>
      {href ? (
        <NavLink exact to={href} className={className} aria-label={label}>
          <ButtonIcon />
          {text ? <span className="btn__text">{text}</span> : null}
        </NavLink>
      ) : (
        <button
          className="btn"
          onClick={onClick}
          aria-label={label}
          disabled={disabled}
        >
          <ButtonIcon />
        </button>
      )}
    </>
  );
}
