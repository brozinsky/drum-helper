import React from 'react'
import './Sequencer.scss'
import { ActiveStepContext } from '../../../contexts/ActiveStepContext'
import { PlayContext } from '../../../contexts/PlayContext'
import { PresetContext } from '../../../contexts/PresetContext'

import useSound from 'use-sound'
import kickEdm from '../../../samples/edm-kick.mp3'
import snareEdm from '../../../samples/edm-snare.mp3'
import hhEdm from '../../../samples/edm-hh.mp3'
import hhOpenEdm from '../../../samples/edm-hh-open.mp3'

const Pad = ({ step, channel, isOnPreset }) => {
    const [activeStep,] = React.useContext(ActiveStepContext)
    const [isPlayActive,] = React.useContext(PlayContext)
    const [preset, setPreset] = React.useContext(PresetContext)

    const [playSnare] = useSound(snareEdm);
    const [playKick] = useSound(kickEdm);
    const [playHh] = useSound(hhEdm);
    const [playHhOpen] = useSound(hhOpenEdm);

    const handleClick = () => {
        // previous isOn array on this channel
        const prevIsOn = preset[channel - 1].isOn

        // destined isOn array with changed flag on clicked pad
        const newIsOn = prevIsOn.map((isOn, index) => {
            if (index === step) {
                return !isOn
            } else return isOn
        })

        const newPreset = preset.map((preset, index) => {
            if (index === (channel - 1)) {
                return { channel: preset.channel, name: preset.name, isOn: newIsOn }
            } else return { channel: preset.channel, name: preset.name, isOn: preset.isOn }
        })

        setPreset(() =>
            newPreset
        )
    }

    const playSample = () => {
        if ((isOnPreset) && activeStep === step && isPlayActive) {
            console.log(`hit da ${channel}!`)

            switch (channel) {
                case 1:
                    playKick()
                    break;
                case 2:
                    playSnare()
                    break;
                case 3:
                    playHh()
                    break;
                case 4:
                    playHhOpen()
                    break;
                default:
                    break;
            }
        }
    }

    React.useEffect(() => {
        playSample()
    })

    return (
        <button
            onClick={handleClick}
            class={`pad
            pad-${step}
            ch-${channel}
            ${step % 4 === 0 ? 'pad--qt' : ''}
            ${activeStep === step && isPlayActive ? 'pad--active' : ''}
             ${isOnPreset ? 'pad--on' : ''}
            `}>
            {step}
        </button>
    )
}

export default Pad