import React, { useState } from 'react';
import NamesList from './component/NamesList/NamesList';
import Search from './component/Search/Search';
import Button from './component/Button/Button';
import PEOPLE from './data'
import './App.scss';

function App() {
  const [search, setSearch] = useState('')
  const handleSearch = (search) =>{
    setSearch(search)
  }

  const handleClearInput = () =>{
    setSearch('')
  }

  return (
    <div className="App">
      <Search onSearch={handleSearch} search={search}/>
      <NamesList data={PEOPLE} search={search}/>
      {/*button for clearing input*/}
      {search && <Button content='Clear List' onClick={handleClearInput}/>}
    </div>
  );
}

export default App;
