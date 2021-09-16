'user strict'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/style.css'

import robot from '../../_lib/robot.js'

const music = new Audio(require('./assets/mj.mp3'))

const listGroup = document.querySelector('.list-group')
let locationNames = []


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
 * Highlight selected item in the list
 * @param {String} locationName Location name 
 */
const highlightItem = (locationName) => {
  const locationItems = listGroup.children
  for (let i = 0; i < locationItems.length; i++) {
    if (locationItems[i].innerHTML === locationName) {
      locationItems[i].className = 'list-group-item active'
    } else {
      locationItems[i].className = 'list-group-item'
    }
  }
}

/**
 * Go to a location [blocking function]
 * @param {String} locationName Location name
 */
const gotoLocation = async (locationName) => {
  console.log(`Goto: ${locationName}`)

  highlightItem(locationName)
  robot.speak(locationName)
  robot.gotoLocation(locationName)

  while (robot.getGotoStatus() !== 'complete') {
    await sleep(1000)
  }
}

/**
 * Handle location selection
 * @param {obj} e Event object
 */
const handleLocationSelection = async (e) => {
  const locationName = e.target.innerHTML
  playMusic()
  await gotoLocation(locationName)
  stop()
}

/**
 * Patrol all locations once
 */
const patrol = async () => {
  // Remove `home base` location
  const patrolLocations = locationNames.slice(1)

  playMusic()

  // Patrol
  for (let i = 0; i < patrolLocations.length; i++) {
    await gotoLocation(patrolLocations[i])
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
  // Get all saved locations from the robot,
  // Or construct one for development purposes
  locationNames = robot.getLocations()
  if (locationNames.length <= 0) {
    locationNames = ['home base', 'tokyo', 'zurich', 'toronto', 'munich', 'boulder', 'los angeles']
  }

  // Add locations list to DOM
  locationNames.forEach(locationName => {
    const a = document.createElement('a')
    a.id = `item-${locationName}`
    a.className = 'list-group-item'
    a.innerHTML = locationName
    a.href = '#'
    a.addEventListener('click', handleLocationSelection)
    listGroup.appendChild(a)
  })

  // Button event handlers
  document.querySelector('#patrol-btn').addEventListener('click', patrol)
  document.querySelector('#stop-btn').addEventListener('click', stop)
}
