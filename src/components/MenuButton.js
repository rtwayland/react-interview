import React from 'react';
import menuIcon from '../img/options-vertical.svg';

const MenuButton = ({onClick}) => (
  <img src={menuIcon} alt="menu" style={{cursor: 'pointer', padding: 5}} onClick={onClick} />
);

export default MenuButton;
