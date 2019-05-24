import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import DropdownExercise from './components/DropdownExercise';
import DropdownExerciseComplete from './complete/DropdownExercise';
import MainPage from './components/MainPage';

function App() {
  return (
    <Router>
      <Route exact path="/" component={MainPage} />
      <Route path="/dropdown" component={DropdownExercise} />
      <Route path="/dropdown-complete" component={DropdownExerciseComplete} />
    </Router>
  );
}

export default App;
