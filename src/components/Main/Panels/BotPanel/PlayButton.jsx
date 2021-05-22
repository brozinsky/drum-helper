import React from 'react'
import './BotPanel.scss'
import { PlayContext } from '../../../../contexts/PlayContext'
import { ActiveStepContext } from '../../../../contexts/ActiveStepContext'

import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import StopIcon from '@material-ui/icons/Stop'

const PlayButton = () => {
    const [isPlayActive, setIsPlayActive] = React.useContext(PlayContext)
    const [, setActiveStep] = React.useContext(ActiveStepContext)

    const handleClick = () => {
        setIsPlayActive(!isPlayActive)
        setActiveStep(0)
    }

    return (
        <button
            onClick={handleClick}
            className='panel__play-button'>
            {isPlayActive
                ? <StopIcon className='panel__play-icon' />
                : <PlayArrowIcon className='panel__play-icon' />}
        </button>
    )
}

export default PlayButton
