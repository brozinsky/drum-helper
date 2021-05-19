import React, { useContext, useEffect } from 'react'
import { SelectedKitContext } from '../../contexts/SelectedKitContext'

const SelectGenre = () => {
    const [kitSelected, setKitSelected] = useContext(SelectedKitContext);

    return (
        // < select
        //     onChange={e => handleAddrTypeChange(e)}
        //     className="browser-default custom-select" >
        //     {
        //         Add.map((address, index) => <option key={index} value={index}>{address}</option>)
        //     }
        // </select >
        < select
        // onChange={e => handleAddrTypeChange(e)}
        >
            {
                kitSelected
                    ? kitSelected.genres.map((type, index) => {
                        return <option key={index} value={index}>{type}</option>
                    })
                    : null
            }

        </select >
    )
}

export default SelectGenre