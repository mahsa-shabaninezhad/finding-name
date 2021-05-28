import PropTypes from 'prop-types'
import React from 'react'
import Button from '../Button/Button'
import Name from '../Name/Name'
import './NamesList.scss'


const NamesList = ({data, search, onAddFavorite}) => {
    data.sort((a, b) => a.name > b.name ? 1 : -1)
    const filterData = data.filter(person => person.name.toLocaleLowerCase().startsWith(search))
    const showNames = filterData.map(person => <Name data={person} onClick={onAddFavorite}/>)    

    return (
        <div className='namesListContainer'>
            {showNames}
        </div>
    )
}

NamesList.propTypes = {
    data: PropTypes.array,
}

export default NamesList
