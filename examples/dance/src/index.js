'use strict'

import './css/style.css'

import connectMqtt from '../../../lib/connect-mqtt'
import dance from './modules/dance'

// const music = new Audio('https://mp3l.jamendo.com/?trackid=1869501&format=mp31')
const music = new Audio('https://mp3l.jamendo.com/?trackid=1214935&format=mp31')
// const music = new Audio('https://mp3l.jamendo.com/?trackid=1863236&format=mp31')

const playButton = document.querySelector('#play-btn')
let state = 0

/**
 * Initialize audio
 */
const init = () => {
  console.log('Initialize')
  playButton.style.backgroundColor = 'red'

  music.currentTime = 0
  music.pause()
}

/**
 * Start dance sequence
 * @param {Boolean} playMusic True to play music; False to not play music 
 */
const play = (playMusic) => {
  console.log('Play')
  playButton.style.backgroundColor = 'green'

  if (playMusic) {
    console.log(`Play Music: ${playMusic}`)
    music.currentTime = 0
    music.play()
  }

  dance.start()
}

/**
 * Stop and reset dance
 */
const stop = () => {
  console.log('Stop')
  playButton.style.backgroundColor = 'blue'

  music.pause()
  dance.stop()
  window.location.reload()
}

/**
 * Handle button click
 */
const toggleButton = () => {
  switch (state) {
    case 0:
      state = 1
      init()
      break
    case 1:
      state = 2
      play(true)
      break
    case 2:
      state = 0
      stop()
      break
    default:
      break
  }
}

/**
 * Handle MQTT dance/stop command topics
 * @param {obj} message MQTT message object 
 */
const messageHandler = (message) => {
  const command = message.command
  const payload = message.payload
  console.debug(payload.master)

  switch (command) {
    case 'dance':
      play(payload.master)
      state = 2
      break
    case 'stop':
      stop()
      break
    default:
      break
  }
}

window.onload = () => {
  // Connect to MQTT broker
  if (process.env.MQTT_HOST_NAME) {
    connectMqtt.init(messageHandler)
  } else {
    console.log('MQTT client not initialized')
  }

  // Initialize button style and logic
  playButton.addEventListener('click', toggleButton)
  playButton.style.backgroundColor = 'blue'
}
