import React, { useContext, useState } from 'react'
import { SelectContext } from '../../contexts/SelectContext'
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

const options = [
    "Electronic",
    "Hip-Hop",
]

const SelectKit = () => {
    const [selectData, setSelectData] = useContext(SelectContext);
    const [kitSelected, setKitSelected] = useContext(SelectedKitContext);
    const classes = useStyles();

    const handleChange = (e) => {
        setKitSelected(selectData[e.target.value])
    }

    return (
        <FormControl className={classes.formControl}>
            <Select
                className={classes.selectEmpty}
                onChange={handleChange}
            >
                {options.map((option, index) => <MenuItem key={index} value={index}>{option}</MenuItem>)}
            </Select>
        </FormControl>


        // < select
        //     onChange={e => handleAddrTypeChange(e)}
        //     className="browser-default custom-select" >
        //     {
        //         Add.map((address, index) => <option key={index} value={index}>{address}</option>)
        //     }
        // </select >
    )
}

export default SelectKit