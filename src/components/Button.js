import { NavLink } from 'react-router-dom';

export function Button({
  className = 'btn',
  text = '',
  href = '',
  children,
  onClick,
}) {
  return (
    <>
      {href !== '' ? (
        <NavLink to={href} className={className} exact>
          {children}
          {text !== '' ? <span className="btn__text">{text}</span> : null}
        </NavLink>
      ) : (
        <button className="btn" onClick={onClick}>
          {children}
        </button>
      )}
    </>
  );
}
