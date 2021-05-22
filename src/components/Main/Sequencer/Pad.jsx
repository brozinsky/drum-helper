import React from 'react'
import './Sequencer.scss'
import { ActiveStepContext } from '../../../contexts/ActiveStepContext'
import { PlayContext } from '../../../contexts/PlayContext'
import useSound from 'use-sound'

import kickEdm from '../../../samples/edm-kick.mp3'
import snareEdm from '../../../samples/edm-snare.mp3'
import hhEdm from '../../../samples/edm-hh.mp3'
import hhOpenEdm from '../../../samples/edm-hh-open.mp3'


const Pad = ({ step, channel, isOnPreset }) => {
    const [activeStep,] = React.useContext(ActiveStepContext)
    const [isPlayActive,] = React.useContext(PlayContext)
    const [isOn, setIsOn] = React.useState(false)

    const [playSnare] = useSound(snareEdm);
    const [playKick] = useSound(kickEdm);
    const [playHh] = useSound(hhEdm);
    const [playHhOpen] = useSound(hhOpenEdm);

    const handleClick = () => {
        setIsOn(!isOn)
    }

    const checkIsOn = () => {
        if (isOnPreset) {
            setIsOn(!isOn)
        }
    }

    const playSample = () => {
        if (isOn && activeStep === step && isPlayActive) {
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
                    //jakiś kod
                    break;
            }
        }
    }

    React.useEffect(() => {
        playSample()
    })

    React.useEffect(() => {
        checkIsOn()
    }, [])

    return (
        <button
            onClick={handleClick}
            class={`pad
            pad-${step}
            ch-${channel}
            ${activeStep === step && isPlayActive ? 'pad--active' : ''}
            ${step % 4 === 0 ? 'pad--qt' : ''}
            ${isOn ? 'pad--on' : ''}`}>
            {step}
        </button>
    )
}


export default Pad