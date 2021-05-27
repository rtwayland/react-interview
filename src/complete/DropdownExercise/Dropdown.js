import React, { useState } from "react";
import MenuButton from "../../components/MenuButton";
import {
  Options,
  Option,
  DropdownContainer,
} from "../../components/styled-components";
import useOnClickOutside from "./useOnClickOutside";

const Dropdown = ({ options, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const optionsRef = useOnClickOutside(setIsOpen);

  return (
    <DropdownContainer ref={optionsRef}>
      <MenuButton onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <Options>
          {options?.length
            ? options.map((item) => <Option key={item}>{item}</Option>)
            : children}
        </Options>
      )}
    </DropdownContainer>
  );
};

Dropdown.Item = ({ children }) => <Option>{children}</Option>;

export default Dropdown;
