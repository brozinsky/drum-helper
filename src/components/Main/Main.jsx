import React from 'react'
import './Main.scss'
import TopPanel from './Panels/TopPanel/TopPanel'
import Sequencer from './Sequencer/Sequencer'
import BotPanel from './Panels/BotPanel/BotPanel'

const Main = () => {
  return (
    <main>
      <TopPanel />
      <Sequencer />
      <BotPanel />
    </main>
  )
}

export default Main