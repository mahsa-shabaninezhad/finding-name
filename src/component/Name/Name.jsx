import React from 'react'
import PropTypes from 'prop-types'
import './Name.scss'

const Name = ({data}) => {
    return (
        <div className={`person ${data.sex}`}>
            {data.name}
        </div>
    )
}

Name.propTypes = {
    data: PropTypes.object
}

export default Name
