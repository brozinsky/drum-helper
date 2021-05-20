import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import './BotPanel.scss'
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
    const [value, setValue] = React.useState(120);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 100) {
            setValue(100);
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
                value={value}
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
