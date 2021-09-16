const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

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

  const gotoPosition = (x, y) => {
    if (typeof connect !== 'undefined') {
      connect.gotoPosition(x, y)
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

  const getPosition = () => {
    let position = { x: 0, y: 0}
    if (typeof connect !== 'undefined') {
      position = JSON.parse(connect.getPosition())
    }
    console.log(`Position: (${position.x}, ${position.y})`)
    return position
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
    gotoPosition,
    gotoLocation,
    getLocations,
    speak,
    stop,
    getPosition,
    getGotoStatus,
  }
})()

export default robot
