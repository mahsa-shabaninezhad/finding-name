import React, { useState } from 'react';
import NamesList from './component/NamesList/NamesList';
import Search from './component/Search/Search';
import Button from './component/Button/Button';
import PEOPLE from './data'
import './App.scss';
import Favorites from './component/Favorites/Favorites';

function App() {
  const [namesList, setNamesList] = useState(PEOPLE)
  const [search, setSearch] = useState('')
  
  const handleSearch = (search) =>{
    setSearch(search)
  }

  const handleClearInput = () =>{
    setSearch('')
  }

  const handleAddingFavoriteItem = (id) =>{
    setNamesList(namesList.map(name => {
      if(name.id === id){
        return {...name, favorite: true}
      }
      return name
    }))
  }

  const handleDeletingFavoriteItem = (id) => {
    setNamesList(namesList.map(name => {
      if(name.id === id){
        return {...name, favorite: false}
      }
      return name
    }))
  }

  const favoriteNames = namesList.filter(name => name.favorite)

  return (
    <div className="App">
      <Search onSearch={handleSearch} search={search}/>
      <Favorites favorites={favoriteNames} onDeleteFavorite={handleDeletingFavoriteItem}/>
      <NamesList data={namesList} search={search} onAddFavorite={handleAddingFavoriteItem}/>
      {/*button for clearing input*/}
      {search && <Button content='Clear List' onClick={handleClearInput}/>}
    </div>
  );
}

export default App;
