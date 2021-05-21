import React from 'react'
import './Sequencer.scss'
import { ActiveStepContext } from '../../../contexts/ActiveStepContext'

const Pad = ({ step, channel, isPlaying, isActive }) => {
    const [isOn, setIsOn] = React.useState(false)
    const [activeStep, setActiveStep] = React.useContext(ActiveStepContext)

    const handleClick = () => {
        setIsOn(!isOn)
    }

    // const repeat = () => {

    // };


    // React.useEffect(() => {
    //     repeat()
    // })

    return (
        <button
            onClick={handleClick}
            class={`pad
            pad-${step}
            ch-${channel}
            ${activeStep === step ? 'pad--active' : ''}
            ${isOn ? 'pad--on' : ''}`}>
            {step}
        </button>
    )
}

export default Pad
