import React from 'react'
import Pad from './Pad'
import './Sequencer.scss'


const Channel = ({ steps, channel }) => {
    const [isPlaying, setIsPlaying] = React.useState(false)
    const [isActive, setIsActive] = React.useState(false)

    const padsNumber = Array.from(Array(steps).keys())

    return (
        <div className={`channel channel-${channel}`}>
            {padsNumber.map((step) => {
                return <Pad key={step} step={step} channel={channel} isActive={true} />
            })}
        </div>

    )
}

export default Channel
