import React from 'react'
import './TopPanel.scss'

const GridInfo = ({ bars }) => {
    return (
        <div className="panel__grid-container">
            <span className="panel__grid">Grid:
             <span className="panel__grid-info">{bars}</span>
            </span>
        </div>
    )
}

export default GridInfo