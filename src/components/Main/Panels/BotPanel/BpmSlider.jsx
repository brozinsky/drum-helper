import React from 'react'
import { BpmContext } from '../../../../contexts/BpmContext'
import './BotPanel.scss'

import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import Input from '@material-ui/core/Input';



const useStyles = makeStyles((theme) => ({
    root: {
        width: 300 + theme.spacing(3) * 2,
    },
    input: {
        width: 42,
    },
}));

function ValueLabelComponent(props) {
    const { children, open, value } = props;

    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

const BpmSlider = () => {
    const classes = useStyles();
    const [bpm, setBpm] = React.useContext(BpmContext)

    const handleSliderChange = (event, newBpm) => {
        setBpm(newBpm);
        console.log(bpm)
    };

    const handleInputChange = (event) => {
        setBpm(event.target.value === '' ? '' : Number(event.target.value));
        console.log(bpm)

    };

    const handleBlur = () => {
        console.log(bpm)

        if (bpm < 50) {
            setBpm(50);
        } else if (bpm > 200) {
            setBpm(200);
        }
    };


    return (
        <div className={classes.root}>
            <Slider
                ValueLabelComponent={ValueLabelComponent}
                defaultValue={120}
                onChange={handleSliderChange}
                min={50}
                max={200}
            />
            <Input
                className={classes.input}
                value={bpm}
                onChange={handleInputChange}
                onBlur={handleBlur}
                inputProps={{
                    step: 10,
                    min: 50,
                    max: 200,
                    type: 'number',
                    'aria-labelledby': 'input-slider',
                }}
            />Bpm
        </div>
    )
}

export default BpmSlider
