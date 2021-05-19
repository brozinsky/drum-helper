import React from 'react'
import Channel from './Channel'
import './Sequencer.scss'

const channelData = [
    { channel: 1, name: 'Kick', },
    { channel: 2, name: 'Snare', },
    { channel: 3, name: 'Closed hat', },
    { channel: 4, name: 'Open hat', }
]
const stepsData = 16;

const Sequencer = () => {
    return (
        <div class="sequencer">
            {channelData.map(({ channel }, index) => {
                return <Channel key={index} steps={stepsData} channel={channel} />
            })}
        </div>
    )
}

export default Sequencer
