import React from 'react'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import './BotPanel.scss'

const PlayButton = () => {
    return (
        <button className='panel__play-button'>
            <PlayArrowIcon />
        </button>
    )
}

export default PlayButton
