import React from 'react'
import PlayButton from './PlayButton'
import BpmSlider from './BpmSlider'
import ButtonsPanel from './ButtonsPanel'
import './BotPanel.scss'

const BotPanel = () => {
    return (
        <div className='panel__bot-panel'>
            <PlayButton />
            <BpmSlider />
            <ButtonsPanel />
        </div>
    )
}

export default BotPanel