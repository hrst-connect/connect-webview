'user strict'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/style.css'

import robot from '../../_lib/robot.js'

import positions from './data/positions.js'

const music = new Audio(require('./assets/mj.mp3'))

/**
 * Start
 */
const playMusic = () => {
  console.log('Play')
  music.currentTime = 0
  music.loop = true
  music.play()
}

/**
 * Asynchronous sleep
 * @param {Number} ms Sleep time [milliseconds]
 * @returns 
 */
const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Print position to DOM
 */
const showPosition = () => {
  const position = robot.getPosition()
  console.log(`Position: (${position.x}, ${position.y}) | Status: ${robot.getGotoStatus()}`)
  document.querySelector('#position').innerHTML = `(${position.x}, ${position.y})`
}

/**
 * Go home
 */
const goHome = () => {
  robot.gotoLocation('home base')
}

/**
 * Go to a coordinate position [blocking]
 * @param {Number} x Position in the X-coordinate frame 
 * @param {Number} y Position in the Y-coordinate frame
 */
const gotoPosition = async (x, y) => {
  robot.gotoPosition(x, y)

  while (robot.getGotoStatus() !== 'complete') {
    await sleep(500)
  }
}

/**
 * Patrol all locations once
 */
const patrol = async () => {
  playMusic()

  // Patrol
  for (let i = 0; i < positions.length; i++) {
    const pos = positions[i]
    await gotoPosition(pos.x, pos.y)
  }

  stop()
}

/**
 * Stop everything and reset
 */
const stop = () => {
  console.log('Stop')
  robot.stop()
  music.pause()
  window.location.reload()
}

window.onload = () => {
  // Button event handlers
  document.querySelector('#home-btn').addEventListener('click', goHome)
  document.querySelector('#patrol-btn').addEventListener('click', patrol)
  document.querySelector('#stop-btn').addEventListener('click', stop)

  setInterval(() => {
    showPosition()
  }, 1000)
}
