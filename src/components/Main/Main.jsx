import React from 'react'
import TopPanel from './TopPanel'
import Sequencer from './Sequencer/Sequencer'
import BotPanel from './BotPanel'

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