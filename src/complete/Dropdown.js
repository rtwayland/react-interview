import React, {useState} from 'react';
import MenuButton from './MenuButton';
import {Options, Option, DropdownContainer} from './styled-components';

const Dropdown = ({options, children}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DropdownContainer>
      <MenuButton onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <Options>
          {options && options.length > 0
            ? options.map(item => <Option>{item}</Option>)
            : React.Children.map(children, child => child)}
        </Options>
      )}
    </DropdownContainer>
  );
};
Dropdown.Item = ({children}) => <Option>{children}</Option>;

export default Dropdown;
