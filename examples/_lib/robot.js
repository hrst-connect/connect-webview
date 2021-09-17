import sleep from './utils'

/**
 * Convenience singleton that can be used with Connect or a regular web-browser.
 * Used for "simulating" robot's behaviour in a web-browser.
 */
const robot = (() => {
  const MINIMUM_WAIT = 500 // minimum waiting period between joystick commands [msec]

  const getId = () => {
    let id = 'mockup'
    if (typeof connect !== 'undefined') {
      id = connect.getId()
    }
    console.log(`Robot ID: ${id}`)
    return id
  }

  const joystick = (x, y) => {
    if (typeof connect !== 'undefined') {
      connect.joystick(x, y)
    }
    console.log(`Joystick: (${x}, ${y})`)
  }

  const move = async (x, y, period) => {
    const iter = Math.round(period / MINIMUM_WAIT)
    for (let i = 0; i < iter; i++) {
      joystick(x, y)
      await sleep(MINIMUM_WAIT)
      console.log(`Move: (${x}, ${y}) | Iterations: ${i}/${iter}`)
    }
  } 

  const turn = (angle) => {
    if (typeof connect !== 'undefined') {
      connect.turn(angle, 1.0)
    }
    console.log(`Turn by: ${angle}`)
  }

  const tilt = (angle) => {
    if (typeof connect !== 'undefined') {
      connect.tilt(angle, 1.0, false)
    }
    console.log(`Tilt by: ${angle}`)
  }

  const gotoPose = (x, y, yaw) => {
    if (typeof connect !== 'undefined') {
      connect.gotoPose(x, y, yaw)
    }
    console.log(`Goto: (${x}, ${y})`)
  }

  const gotoLocation = (locationName) => {
    if (typeof connect !== 'undefined') {
      connect.gotoLocation(locationName)
    }
    console.log(`Goto: ${locationName}`)
  }

  const getLocations = () => {
    let locations = []
    if (typeof connect !== 'undefined') {
      locations = JSON.parse(connect.getLocations())
    }
    console.log('Locations:', locations)
    return locations
  }

  const speak = (utterance) => {
    if (typeof connect !== 'undefined') {
      connect.speak(utterance)
    }
    console.log(`Speak: ${utterance}`)
  }

  const stop = () => {
    if (typeof connect !== 'undefined') {
      connect.stop()
    }
    console.log('Stop')
  }

  const getPose = () => {
    let pose = { x: 0, y: 0, yaw: 0}
    if (typeof connect !== 'undefined') {
      pose = JSON.parse(connect.getPose())
      console.log(pose.yaw)
    }
    console.log(`Pose: (${pose.x}, ${pose.y}) | Yaw: ${pose.yaw}`)
    return pose
  }

  const getGotoStatus = () => {
    let status = null
    if (typeof connect !== 'undefined') {
      status = connect.getGotoStatus()
    }
    console.log(`Status: ${status}`)
    return status
  }

  return {
    getId,
    move,
    turn,
    tilt,
    gotoPose,
    gotoLocation,
    getLocations,
    speak,
    stop,
    getPose,
    getGotoStatus,
  }
})()

export default robot
