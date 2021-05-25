import React from 'react'
import { PresetDataContext } from '../../contexts/PresetDataContext'
import { PresetContext } from '../../contexts/PresetContext'

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const SelectPreset = () => {
    const [presetData,] = React.useContext(PresetDataContext)
    const [preset, setPreset] = React.useContext(PresetContext)
    const classes = useStyles();

    const handleChange = (event) => {
        setPreset(event.target.value);
        console.log(preset)
    };

    return (
        <FormControl className={classes.formControl}>
            <Select
                className={classes.selectEmpty}
                value={preset}
                onChange={handleChange}
            >
                {presetData[0].genres[0].presets.map((preset, index) => {
                    return <MenuItem value={preset} key={index}>{preset.name}</MenuItem>
                })}
            </Select>
        </FormControl>
    )
}

export default SelectPreset