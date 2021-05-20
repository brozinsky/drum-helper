import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import './TopPanel.scss'

const AddButton = () => {
    return (
        <button className='panel__add-button'>
            Add <AddIcon />
        </button>
    )
}

export default AddButton