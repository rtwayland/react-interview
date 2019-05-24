import React from 'react';
import {Link} from 'react-router-dom';

const MainPage = () => (
  <div>
    <Link to="/dropdown">Dropdown</Link>
    <Link to="/dropdown-complete" style={{marginLeft: 10}}>
      Dropdown Complete
    </Link>
  </div>
);

export default MainPage;
