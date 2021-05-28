import React from 'react'
import PropTypes from 'prop-types'
import Name from '../Name/Name'
import './FavoriteName.scss'

const FavoriteName = ({favoriteName, onClick}) => {
    return (
        <div className='favorite'>
            <span className='favorite-delete' onClick={() => onClick(favoriteName.id)}>x</span>
            <Name data={favoriteName}/>
        </div>
    )
}

FavoriteName.propTypes = {

}

export default FavoriteName
