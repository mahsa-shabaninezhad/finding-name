import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

const Button = ({content, onClick}) => {
    return (
        <button className='clear-btn' onClick={onClick}>
            {content}
        </button>
    )
}

Button.propTypes = {
    content: PropTypes.string
}

export default Button