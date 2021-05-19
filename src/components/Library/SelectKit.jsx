import React, { useContext, useState } from 'react'
import { SelectContext } from '../../contexts/SelectContext'
import { SelectedKitContext } from '../../contexts/SelectedKitContext'

const options = [
    "Electronic",
    "Hip-Hop",
]

const SelectKit = () => {
    const [selectData, setSelectData] = useContext(SelectContext);
    const [kitSelected, setKitSelected] = useContext(SelectedKitContext);

    const Add = options.map(Add => Add)
    const handleAddrTypeChange = (e) => {
        setKitSelected(selectData[e.target.value])
    }

    return (
        < select
            onChange={e => handleAddrTypeChange(e)}
            className="browser-default custom-select" >
            {
                Add.map((address, index) => <option key={index} value={index}>{address}</option>)
            }
        </select >
    )
}

export default SelectKit