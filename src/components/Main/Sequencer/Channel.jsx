import React from 'react'
import Pad from './Pad'
import './Sequencer.scss'

const Channel = ({ steps, channel }) => {

    const padsNumber = Array.from(Array(steps).keys())

    return (
        <div className={`channel channel-${channel}`}>
            {padsNumber.map((step) => {
                return <Pad key={step} step={step} channel={channel} />
            })}
        </div>

    )
}

export default Channel
