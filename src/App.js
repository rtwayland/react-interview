import React from 'react';
import Dropdown from './components/Dropdown_soloution';

function App() {
  const options = ['One', 'Two', 'Three', 'Four'];
  return (
    <div style={{margin: 20}}>
      <h2>First Implementation</h2>
      <Dropdown options={options} />

      <h2 style={{marginTop: 50}}>Second Implementation</h2>
      <Dropdown>
        <Dropdown.Item>One</Dropdown.Item>
      </Dropdown>
    </div>
  );
}

export default App;
