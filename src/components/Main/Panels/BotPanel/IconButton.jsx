import React from 'react'
import './BotPanel.scss'


const IconButton = ({ icon, title }) => {
    return (
        <button className="panel__icon-button">
            {icon}
            <span className="panel__icon-button-title">{title}</span>
        </button>
    )
}

export default IconButton