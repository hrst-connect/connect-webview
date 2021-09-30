'use strict'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/style.css'

import * as robot from '../../../lib/robot'
import sleep from '../../../lib/utils'

const music = new Audio('https://mp3l.jamendo.com/?trackid=1214935&format=mp31')

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

  // Poll for goto-complete status
  let watchdog = 3
  while (robot.getGotoStatus() !== robot.GOTO_STATUS.COMPLETE) {
    await sleep(1000)
    
    if (watchdog-- < 0) {
      break
    }
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
 * Patrol all locations (except `home base`)
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

/**
 * Initialize the DOM
 */
window.onload = () => {
  // Get all saved locations from the robot,
  // Or construct one for development purposes
  locationNames = robot.getLocations()
  if (locationNames.length <= 0) {
    locationNames = ['home base', 'Tokyo', 'Zurich', 'Munich', 'Boulder', 'Los Angeles', 'Toronto']
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
