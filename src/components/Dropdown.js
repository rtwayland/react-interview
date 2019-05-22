import React from 'react';
import MenuButton from './MenuButton';
import {Options, Option, DropdownContainer} from './styled-components';

const Dropdown = () => (
  <DropdownContainer>
    <MenuButton />
    <Options>{/* Implementation here */}</Options>
  </DropdownContainer>
);

export default Dropdown;
