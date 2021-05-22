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

const presetData = [
    { defaultBpm: 100 },
    { grid: 16 },
    {
        preset: [
            {
                channel: 1, name: 'Kick',
                isOn: [
                    true, false, false, false,
                    true, false, false, false,
                    true, false, false, false,
                    true, false, false, false,]
            },
            {
                channel: 2, name: 'Snare',
                isOn: [
                    false, false, true, false,
                    false, false, true, false,
                    false, false, true, false,
                    false, false, true, false,]
            },
            {
                channel: 3, name: 'Closed hat',
                isOn: [
                    false, true, false, true,
                    false, true, false, true,
                    false, true, false, true,
                    false, true, false, false,]
            },
            {
                channel: 4, name: 'Open hat',
                isOn: [
                    false, false, false, false,
                    false, false, false, false,
                    false, false, false, false,
                    false, false, false, true,]
            }
        ]
    }
]

const stepsData = 16;

const Sequencer = () => {
    const [activeStep, setActiveStep] = React.useContext(ActiveStepContext)
    const [isPlayActive,] = React.useContext(PlayContext)
    const [bpm,] = React.useContext(BpmContext)

    let interval = (60 / bpm / 2) * 1000;

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
                {channelData.map(({ name }, index) => {
                    return <div className="sequencer__label" key={index}>{name}</div>
                })}
            </div>
            <div className="sequencer__pad-container">
                {presetData[2].preset.map(({ channel, isOn }, index) => {
                    return <Channel
                        key={index}
                        steps={stepsData}
                        channel={channel}
                        isOnPreset={isOn}
                    />
                })}
            </div>
        </div>
    )
}

export default Sequencer