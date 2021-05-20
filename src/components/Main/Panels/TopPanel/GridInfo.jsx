import React, { useState } from 'react'
import './TopPanel.scss'

const GridInfo = () => {
    const [bars, setBars] = useState('1/4')

    return (
        <div className="panel__grid-container">
            <span className="panel__grid">Grid:
             <button className="panel__grid-button">{bars}</button>
            </span>
        </div>
    )
}

export default GridInfo