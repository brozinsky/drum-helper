import React from 'react'
import Channel from './Channel'
import './Sequencer.scss'
import { BpmContext } from '../../../contexts/BpmContext'
import { PlayContext } from '../../../contexts/PlayContext'
import { PresetContext } from '../../../contexts/PresetContext'
import { ActiveStepContext } from '../../../contexts/ActiveStepContext'

// const stepsData = 16;

const Sequencer = () => {
    const [activeStep, setActiveStep] = React.useContext(ActiveStepContext)
    const [isPlayActive,] = React.useContext(PlayContext)
    const [bpm,] = React.useContext(BpmContext)
    const [preset,] = React.useContext(PresetContext)

    let interval = (60 / bpm / 2) * 1000;

    //loop over the 4 bars on sequencer
    const repeat = () => {
        if (isPlayActive) {
            setTimeout(() => {
                if (activeStep >= 15) {
                    setActiveStep(0);
                } else {
                    setActiveStep(activeStep + 1);
                }
            }, interval);
        }
    };

    React.useEffect(() => {
        repeat()
    })

    return (
        <div className="sequencer">
            <div className="sequencer__label-container">
                {preset.map(({ name }, index) => {
                    return <div className="sequencer__label" key={index}>{name}</div>
                })}
            </div>
            <div className="sequencer__pad-container">
                {preset.map(({ channel, isOn }, index) => {
                    return <Channel
                        key={index}
                        steps={16}
                        channel={channel}
                        isOnPreset={isOn}
                    />
                })}
            </div>
        </div>
    )
}

export default Sequencer