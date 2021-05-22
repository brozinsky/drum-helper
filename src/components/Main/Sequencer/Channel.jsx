import React from 'react'
import Pad from './Pad'
import './Sequencer.scss'

const Channel = ({ steps, channel, isOnPreset }) => {
    const padsNumber = Array.from(Array(steps).keys())

    return (
        <div className={`channel channel-${channel}`}>
            {isOnPreset.map((isOn, index) => {
                return <Pad
                    key={index}
                    step={index}
                    channel={channel}
                    isActive={true}
                    isOnPreset={isOn}
                />
            })}
        </div>

    )
}

export default Channel