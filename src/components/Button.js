import { NavLink } from 'react-router-dom';

export function Button(props) {
  return (
    <NavLink to={`${props.href}`} className="btn" exact>
      {props.term}
    </NavLink>
  );
}
