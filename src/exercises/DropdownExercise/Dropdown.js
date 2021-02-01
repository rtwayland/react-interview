import React from "react";
import MenuButton from "../../components/MenuButton";
import {
  Options,
  Option,
  DropdownContainer,
} from "../../components/styled-components";

const Dropdown = () => (
  <DropdownContainer>
    <MenuButton />
    <Options>{/* Implementation here */}</Options>
  </DropdownContainer>
);

export default Dropdown;
