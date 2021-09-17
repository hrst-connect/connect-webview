'user strict'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/style.css'

import robot from '../../_lib/robot'
import sleep from '../../_lib/utils'

import poses from './data/poses.js'

const music = new Audio()

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
 * Print pose to DOM
 */
const showPose = () => {
  const pose = robot.getPose()
  console.log(`Pose: (${pose.x}, ${pose.y}) | Status: ${robot.getGotoStatus()}`)
  document.querySelector('#pose').innerHTML = `
    <p>X: ${pose.x.toFixed(2)} m</p>
    <p>Y: ${pose.y.toFixed(2)} m</p>
    <p>Yaw: ${Math.round(pose.yaw * 180 / Math.PI)}°</p>
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

  // Poll for goto-complete status
  let watchdog = 3
  while (robot.getGotoStatus() !== 'complete') {
    await sleep(1000)
    
    if (watchdog-- < 0) {
      break
    }
  }
}

/**
 * Patrol all locations once
 */
const patrol = async () => {
  for (let i = 0; i < poses.length; i++) {
    const pose = poses[i]

    // Play music
    music.src = `https://mp3l.jamendo.com/?trackid=${pose.trackId}&format=mp31`
    playMusic()

    // Go to location
    await gotoPose(pose.x, pose.y, pose.yaw)
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
    showPose()
  }, 1000)
}
