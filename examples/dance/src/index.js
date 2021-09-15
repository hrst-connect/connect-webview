'user strict'

import './style.css'

import connectMqtt from './connect_mqtt'
import robot from './robot'
import dance from './dance'

const music = new Audio(require('./mj.mp3'))

let state = 0

/**
 * Initialize audio
 */
const init = () => {
  console.log('Initialize')
  document.querySelector('#play-btn').style.backgroundColor = 'red'

  music.currentTime = 0
  music.play()
  music.pause()
}

/**
 * Start dance sequence
 * @param {Boolean} playMusic True to play music; False to not play music 
 */
const play = (playMusic) => {
  console.log('Play')
  document.querySelector('#play-btn').style.backgroundColor = 'green'

  if (playMusic) {
    console.log(`Play Music: ${playMusic}`)
    music.currentTime = 0
    music.play()
  }

  dance()
}

/**
 * Stop and reset dance
 */
const stop = () => {
  console.log('Stop')
  document.querySelector('#play-btn').style.backgroundColor = 'red'

  music.pause()
  robot.stop()
  window.location.reload()
}

/**
 * Handle button click
 */
const toggleButton = () => {
  switch (state) {
    case 0:
      init()
      state = 1
      break
    case 1:
      play(true)
      state = 2
      break
    case 2:
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

  if (command === 'dance') {
    const playMusic = payload.master
    play(playMusic)
    state = 2
  } else if (command === 'stop') {
    stop()
  }
}

window.onload = () => {
  // Connect to MQTT broker
  const robotId = robot.getId()
  if (robotId) {
    connectMqtt.init(robotId, messageHandler)
  }

  // Initialize button style and logic
  document.querySelector('#play-btn').addEventListener('click', toggleButton)
  document.querySelector('#play-btn').style.backgroundColor = 'blue'
}
