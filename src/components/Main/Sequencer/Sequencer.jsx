import React from 'react'
import Channel from './Channel'
import './Sequencer.scss'
import { BpmContext } from '../../../contexts/BpmContext'
import { PlayContext } from '../../../contexts/PlayContext'
import { ActiveStepContext } from '../../../contexts/ActiveStepContext'

const channelData = [
    { channel: 1, name: 'Kick', },
    { channel: 2, name: 'Snare', },
    { channel: 3, name: 'Closed hat', },
    { channel: 4, name: 'Open hat', }
]
const stepsData = 16;

const Sequencer = () => {
    const [isPlaying, setIsPlaying] = React.useState(false)
    const [isActive, setIsActive] = React.useState(false)

    const [activeStep, setActiveStep] = React.useContext(ActiveStepContext)
    const [isPlayActive,] = React.useContext(PlayContext)
    const [bpm,] = React.useContext(BpmContext)

    let interval = (60 / bpm / 2) * 1000;

    const repeat = () => {
        setTimeout(() => {
            if (activeStep >= 15) {
                setActiveStep(0);
                console.log(activeStep)
            } else {
                setActiveStep(activeStep + 1);
                console.log(activeStep)
            }

        }, interval);
    };


    React.useEffect(() => {
        repeat()
    })

    return (
        <div class="sequencer">
            <div className="sequencer__label-container">
                {channelData.map(({ name }, index) => {
                    return <div className="sequencer__label" key={index}>{name}</div>
                })}
            </div>
            <div className="sequencer__pad-container">
                {channelData.map(({ channel }, index) => {
                    return <Channel key={index} steps={stepsData} channel={channel} />
                })}
            </div>

        </div>
    )
}

export default Sequencer
