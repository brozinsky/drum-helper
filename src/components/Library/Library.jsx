import React from 'react'
import SelectKit from './SelectKit'
import SelectGenre from './SelectGenre'
import SelectPreset from './SelectPreset'

const Library = () => {
    return (
        <div>
            <h2>Library</h2>
            <SelectKit />
            <SelectGenre />
            <SelectPreset />
        </div>
    )
}

export default Library
