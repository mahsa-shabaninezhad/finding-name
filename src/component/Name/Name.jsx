import React from 'react'
import PropTypes from 'prop-types'
import './Name.scss'

const Name = ({data, onClick}) => {
    return (
        <div className={`person ${data.sex}`} onClick={() => onClick(data.id)}>
            {data.name}
        </div>
    )
}

Name.propTypes = {
    data: PropTypes.object
}

export default Name
