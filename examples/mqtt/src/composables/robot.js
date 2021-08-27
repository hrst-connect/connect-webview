import { ref } from 'vue'

const robot = (() => {
  const error = ref(null)
  const resp = ref(null)

  const turnBy = (angle) => {
    if (typeof connect !== 'undefined') {
      connect.turnBy(angle)
    }
    resp.value = `Turn by: ${angle}`
  }

  const tiltBy = (angle) => {
    if (typeof connect !== 'undefined') {
      connect.tiltBy(angle)
    }
    resp.value = `Tilt by: ${angle}`
  }

  const gotoLocation = (locationName) => {
    if (typeof connect !== 'undefined') {
      connect.gotoLocation(locationName)
    }
    resp.value = `Goto: ${locationName}`
  }

  const getLocations = () => {
    let locations = []
    if (typeof connect !== 'undefined') {
      error.value = `Can't get locations because this is not running on Connect`
    } else {
      locations = connect.getLocations()
    }
    resp.value = 'Get locations'
    return locations
  }

  const speak = (utterance) => {
    if (typeof connect !== 'undefined') {
      connect.speak(utterance)
    }
    resp.value = `Say: ${utterance}`
  }

  return {
    error,
    resp,
    turnBy,
    tiltBy,
    gotoLocation,
    getLocations,
    speak
  }
})()

export default robot
