import React from 'react'
import PropTypes from 'prop-types'
import './Search.scss'

const Search = ({onSearch, search}) => {
    return (
        <div className='search-container'>
            <input 
                type="text" 
                value={search}
                className='search' 
                placeholder='Type Here...' 
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    )
}

Search.propTypes = {

}

export default Search
