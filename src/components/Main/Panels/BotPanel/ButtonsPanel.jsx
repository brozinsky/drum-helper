import React from 'react'
import IconButton from './IconButton'
import './BotPanel.scss'

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import GetAppIcon from '@material-ui/icons/GetApp';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

const favoriteBorderIcon = <FavoriteBorderIcon />
const getAppIcon = <GetAppIcon />
const libraryMusicIcon = <LibraryMusicIcon />

const buttonData = [
    { title: 'mp3', icon: favoriteBorderIcon },
    { title: 'midi', icon: getAppIcon },
    { title: 'like', icon: libraryMusicIcon }
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