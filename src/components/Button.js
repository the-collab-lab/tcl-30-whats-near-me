import React from 'react';
import '../App.css';
import { NavLink, Link } from 'react-router-dom';

export function Button(props) {
  return <NavLink to={`${props.href}`}>{props.term}</NavLink>;
}
