import React from 'react'
import IconButton from './IconButton'
import './BotPanel.scss'

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import GetAppIcon from '@material-ui/icons/GetApp';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

const favoriteBorderIcon = <FavoriteBorderIcon className='panel__icon-button-icon' />
const getAppIcon = <GetAppIcon className='panel__icon-button-icon' />
const libraryMusicIcon = <LibraryMusicIcon className='panel__icon-button-icon' />

const buttonData = [
    { title: 'mp3', icon: libraryMusicIcon },
    { title: 'midi', icon: getAppIcon },
    { title: 'like', icon: favoriteBorderIcon }
]

const ButtonsPanel = () => {
    return (
        <div className="panel__buttons-container">
            {buttonData.map(({ title, icon }, index) => {
                return <IconButton title={title} icon={icon} key={index} />
            })}
        </div>
    )
}

export default ButtonsPanel