import React from 'react'
import { SelectedKitContext } from '../../contexts/SelectedKitContext'

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
    const [kitSelected, setKitSelected] = React.useContext(SelectedKitContext);
    const classes = useStyles();

    const handleChange = (event) => {
        setKitSelected(event.target.value);
    };

    return (
        <FormControl className={classes.formControl}>
            <Select
                className={classes.selectEmpty}
                value={kitSelected}
                onChange={handleChange}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
    )
}

export default SelectPreset