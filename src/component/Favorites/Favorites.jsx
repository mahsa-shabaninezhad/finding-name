import React from 'react'
import PropTypes from 'prop-types'
import './Favorites.scss'
import FavoriteName from '../FavoriteName/FavoriteName'

const Favorites = ({favorites, onDeleteFavorite}) => {
    return (
        <div className="favorites">
            <h3 className="favorites__header">your favorites</h3>
            <div className="favorites__items">
                {favorites.map(favorite => <FavoriteName favoriteName={favorite} onClick={onDeleteFavorite}/>)}
            </div>
        </div>
    )
}

Favorites.propTypes = {

}

export default Favorites
