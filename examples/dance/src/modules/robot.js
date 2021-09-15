const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const robot = (() => {
  const MINIMUM_WAIT = 500 // minimum waiting period between joystick commands [msec]

  let resp = null

  const getId = () => {
    let id = 'mockup'
    if (typeof connect !== 'undefined') {
      id = connect.getId()
    }
    resp = `Robot ID: ${id}`
    console.log(resp)
    return id
  }

  const joystick = (x, y) => {
    if (typeof connect !== 'undefined') {
      connect.joystick(x, y)
    }
    resp = `Joystick: (${x}, ${y})`
    console.log(resp)
  }

  const move = async (x, y, period) => {
    const iter = Math.round(period / MINIMUM_WAIT)
    for (let i = 0; i < iter; i++) {
      joystick(x, y)
      await sleep(MINIMUM_WAIT)
    }
  } 

  const turn = (angle) => {
    if (typeof connect !== 'undefined') {
      connect.turn(angle, 1.0)
    }
    resp = `Turn by: ${angle}`
    console.log(resp)
  }

  const tilt = (angle) => {
    if (typeof connect !== 'undefined') {
      connect.tilt(angle, 1.0, false)
    }
    resp = `Tilt by: ${angle}`
    console.log(resp)
  }

  const gotoLocation = (locationName) => {
    if (typeof connect !== 'undefined') {
      connect.gotoLocation(locationName)
    }
    resp = `Goto: ${locationName}`
    console.log(resp)
  }

  const getLocations = () => {
    let locations = []
    if (typeof connect !== 'undefined') {
      console.error("Can't get locations because this is not running on Connect")
    } else {
      locations = connect.getLocations()
    }
    resp = 'Get locations'
    console.log(resp)
    return locations
  }

  const speak = (utterance) => {
    if (typeof connect !== 'undefined') {
      connect.speak(utterance)
    }
    resp = `Speak: ${utterance}`
    console.log(resp)
  }

  const stop = () => {
    if (typeof connect !== 'undefined') {
      connect.stop()
    }
    resp = 'Stop'
    console.log(resp)
  }

  return {
    resp,
    getId,
    move,
    turn,
    tilt,
    gotoLocation,
    getLocations,
    speak,
    stop
  }
})()

export default robot
