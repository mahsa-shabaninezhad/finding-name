import PropTypes from 'prop-types'
import React from 'react'
import Name from '../Name/Name'
import './NamesList.scss'


const NamesList = ({data, search}) => {
    const filterData = data.filter(person => person.name.toLocaleLowerCase().startsWith(search))
    const showNames = filterData.map(person => <Name data={person}/>)    

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
