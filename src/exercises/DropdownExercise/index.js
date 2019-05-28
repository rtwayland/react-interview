import React from 'react';
import Dropdown from './Dropdown';

const DropdownExercise = () => {
  const options = ['One', 'Two', 'Three', 'Four'];
  return (
    <div style={{margin: 20}}>
      {/* First implementation passing Dropdown an array */}
      <h2>First Implementation</h2>
      <Dropdown options={options} />
      {/* Second implementation passing Dropdown child elements */}
      
      {/* <h2 style={{marginTop: 50}}>Second Implementation</h2>
      <Dropdown>
        <Dropdown.Item>One</Dropdown.Item>
      </Dropdown> */}
    </div>
  );
};

export default DropdownExercise;
