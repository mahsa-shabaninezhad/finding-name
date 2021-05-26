import React, { useState } from 'react';
import NamesList from './component/NamesList/NamesList';
import Search from './component/Search/Search';
import PEOPLE from './data'
import './App.scss';

function App() {
  const [search, setSearch] = useState('')
  const handleSearch = (search) =>{
    setSearch(search)
  }

  return (
    <div className="App">
      <Search onSearch={handleSearch} search={search}/>
      <NamesList data={PEOPLE} search={search}/>
    </div>
  );
}

export default App;
