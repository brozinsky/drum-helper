import React from 'react'
import './BotPanel.scss'
import { PlayContext } from '../../../../contexts/PlayContext'

import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import StopIcon from '@material-ui/icons/Stop'



const PlayButton = () => {
    const [playActive, setPlayActive] = React.useContext(PlayContext)

    const handleClick = () => {
        setPlayActive(!playActive)
    }

    return (
        <button
            onClick={handleClick}
            className='panel__play-button'>
            {playActive
                ? <StopIcon className='panel__play-icon' />
                : <PlayArrowIcon className='panel__play-icon' />}

        </button>
    )
}

export default PlayButton
