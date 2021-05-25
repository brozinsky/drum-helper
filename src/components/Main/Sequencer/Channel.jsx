import React from 'react'
import Pad from './Pad'
import './Sequencer.scss'
import { PresetContext } from '../../../contexts/PresetContext'

const Channel = ({ steps, channel, isOnPreset }) => {
    const padsNumber = Array.from(Array(steps).keys())
    const [preset,] = React.useContext(PresetContext)

    return (
        <div className={`channel channel-${channel}`}>
            {preset[(channel - 1)].isOn.map((isOn, index) => {
                return <Pad
                    key={index}
                    step={index}
                    channel={channel}
                    isOnPreset={isOn}
                />
            })}
        </div>

    )
}

export default Channel