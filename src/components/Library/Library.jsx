import React from 'react'
import './Library.scss'
import SelectKit from './SelectKit'
import SelectGenre from './SelectGenre'
import SelectPreset from './SelectPreset'
import AssistButton from './AssistButton'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

const Library = () => {
    return (
        <section className='library'>
            <h2 className='library__title'><LibraryBooksIcon /> Library</h2>
            <form className='library__form'>
                <SelectKit />
                <SelectGenre />
                <SelectPreset />
            </form>
            <AssistButton />
        </section>
    )
}

export default Library
