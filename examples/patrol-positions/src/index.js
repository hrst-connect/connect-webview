'user strict'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/style.css'

import robot from '../../_lib/robot.js'

import poses from './data/poses.js'

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
  const pose = robot.getPose()
  console.log(`Pose: (${pose.x}, ${pose.y}) | Status: ${robot.getGotoStatus()}`)
  document.querySelector('#pose').innerHTML = `
    Position: (${pose.x.toFixed(2)}, ${pose.y.toFixed(2)}) | Yaw: ${Math.round(pose.yaw * 180 / Math.PI)}°
  `
}

/**
 * Go home
 */
const goHome = () => {
  robot.gotoLocation('home base')
}

/**
 * Go to a coordinate position [blocking]
 * @param {Number} x Position in the X-coordinate frame [m]
 * @param {Number} y Position in the Y-coordinate frame [m]
 * @param {Number} yaw Yaw angle [rad]
 */
const gotoPose = async (x, y, yaw) => {
  robot.gotoPose(x, y, yaw)

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
  for (let i = 0; i < poses.length; i++) {
    const pos = poses[i]
    await gotoPose(pos.x, pos.y, pos.yaw)
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
