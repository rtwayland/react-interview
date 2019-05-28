import React, {useState} from 'react';
import MenuButton from '../../components/MenuButton';
import {Options, Option, DropdownContainer} from '../../components/styled-components';

const Dropdown = ({options, children}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DropdownContainer>
      <MenuButton onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <Options>
          {options && options.length > 0 ? options.map(item => <Option key={item}>{item}</Option>) : children}
        </Options>
      )}
    </DropdownContainer>
  );
};
Dropdown.Item = ({children}) => <Option>{children}</Option>;

export default Dropdown;
