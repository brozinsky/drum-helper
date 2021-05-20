import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import './BotPanel.scss'

const BpmSlider = () => {
    return (
        <div>
            <Slider aria-labelledby="continuous-slider" />
        </div>
    )
}

export default BpmSlider
