import { ref } from 'vue'

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const robot = (() => {
  const MINIMUM_WAIT = 500 // minimum waiting period between joystick commands [msec]

  const error = ref(null)
  const resp = ref(null)

  const getId = () => {
    let id = 'mockup'
    if (typeof connect !== 'undefined') {
      id = connect.getId()
    }
    resp.value = `Robot ID: ${id}`
    console.log(resp.value)
    return id
  }

  const joystick = (x, y) => {
    if (typeof connect !== 'undefined') {
      connect.joystick(x, y)
    }
    resp.value = `Joystick: (${x}, ${y})`
    console.log(resp.value)
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
    resp.value = `Turn by: ${angle}`
    console.log(resp.value)
  }

  const tilt = (angle) => {
    if (typeof connect !== 'undefined') {
      connect.tilt(angle, 1.0, false)
    }
    resp.value = `Tilt by: ${angle}`
    console.log(resp.value)
  }

  const gotoLocation = (locationName) => {
    if (typeof connect !== 'undefined') {
      connect.gotoLocation(locationName)
    }
    resp.value = `Goto: ${locationName}`
    console.log(resp.value)
  }

  const getLocations = () => {
    let locations = []
    if (typeof connect !== 'undefined') {
      error.value = `Can't get locations because this is not running on Connect`
    } else {
      locations = connect.getLocations()
    }
    resp.value = 'Get locations'
    console.log(resp.value)
    return locations
  }

  const speak = (utterance) => {
    if (typeof connect !== 'undefined') {
      connect.speak(utterance)
    }
    resp.value = `Speak: ${utterance}`
    console.log(resp.value)
  }

  return {
    error,
    resp,
    getId,
    move,
    turn,
    tilt,
    gotoLocation,
    getLocations,
    speak
  }
})()

export default robot
