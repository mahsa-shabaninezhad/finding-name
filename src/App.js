import React, { useState } from 'react';
import NamesList from './component/NamesList/NamesList';
import PEOPLE from './data'
import './App.scss';

function App() {

  return (
    <div className="App">
      <NamesList data={PEOPLE}/>
    </div>
  );
}

export default App;
