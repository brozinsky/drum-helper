import React from 'react'
import GridInfo from './GridInfo'
import AddButton from './AddButton'
import './TopPanel.scss'

const TopPanel = () => {
    return (
        <div className='panel__top-panel'>
            <AddButton />
            <GridInfo />
        </div>
    )
}

export default TopPanel