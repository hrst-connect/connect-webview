'use strict'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/style.css'

import robot from '../../_lib/robot.js'
import sleep from '../../_lib/utils'


/**
 * Initialize the DOM
 */
window.onload = async () => {
  robot.enableUserDetection()

  let firstFollow = false
  let firstStop = false
  let status = null
  while (true) {
    await sleep(2000)
    status = robot.getUserDetectionStatus()

    if (status === 'detected' && !firstFollow) {
      console.log('Start following')
      document.querySelector('#status').innerHTML = status
      robot.follow()
      firstFollow = true
      firstStop = false
    } else if (status !== 'detected' && !firstStop) {
      console.log('Stop following')
      document.querySelector('#status').innerHTML = status
      robot.stop()
      firstStop = true
      firstFollow = false
    }
  }
}
