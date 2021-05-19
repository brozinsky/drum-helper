import React from 'react'
import './Sequencer.scss'

const Pad = ({ step, channel, isActive }) => {
    return (
        <div class={`pad
            pad-${step}
            ch-${channel}
            ${isActive ? 'pad--active' : ''}`}>
            {step}
        </div>
    )
}

export default Pad
