'use strict'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/style.css'

import Wave from '@foobar404/wave'

import robot from '../../_lib/robot.js'
import sleep from '../../_lib/utils'

const text = document.querySelector('#text')
const audio = document.querySelector('#audio')
const video = document.querySelector('#video')
const canvas = document.querySelector('#canvas')
const query = document.querySelector('#query')

let firstFollow = null
let firstStop = null

const tasks = [
  {
    speak: 'This is a Connect WebView Welcome Example',
  },
  {
    speak: 'Want to hear some music?',
    audio: 'https://mp3l.jamendo.com/?trackid=1869501&format=mp31',
  },
  {
    speak: 'Shall I play you a song?',
    audio: 'https://mp3l.jamendo.com/?trackid=1214935&format=mp31',
  },
  {
    speak: 'How about a tune?',
    audio: 'https://mp3l.jamendo.com/?trackid=1863236&format=mp31',
  },
  {
    speak: 'Hey, check out this video!',
    video: 'https://firebasestorage.googleapis.com/v0/b/connect-dev-59bbe.appspot.com/o/media%2Fmotorcycle.mp4?alt=media&token=805f1014-324b-4902-96e1-c72e68949070'
  },
  {
    speak: 'Check out this model of the NASA Mars rover',
    video: 'https://firebasestorage.googleapis.com/v0/b/connect-dev-59bbe.appspot.com/o/media%2Fmars-rover.mp4?alt=media&token=6588d147-ed39-4218-be79-611c1aac559b'
  },
]

const startInteraction = async () => {
  robot.follow()

  // Perform a random task
  const task = tasks[Math.floor(Math.random() * tasks.length)]

  if (task.speak) {
    text.innerHTML = task.speak
    text.removeAttribute('hidden')
    robot.speak(task.speak)
    await sleep(1000)
  }

  if (task.audio) {
    query.removeAttribute('hidden')
    document.querySelector('#btn-no').addEventListener('click', () => {
      robot.speak("I can see that you're not interested")
      reset()
    })
    document.querySelector('#btn-yes').addEventListener('click', () => {
      reset()

      audio.src = task.audio
      audio.currentTime = 0
      audio.play()
      canvas.removeAttribute('hidden')

      audio.addEventListener('ended', reset, false)
      canvas.addEventListener('click', () => {
        audio.pause()
        reset()
      })
    })
  }

  if (task.video) {
    video.src = task.video
    video.muted = true // this is needed in order to play the video without user-interaction
    video.play()
    video.removeAttribute('hidden')
    video.addEventListener('ended', reset, false)
  }
}

const reset = async () => {
  console.log('Reset')

  text.innerHTML = null
  text.setAttribute('hidden', true)
  query.setAttribute('hidden', true)
  video.setAttribute('hidden', true)
  canvas.setAttribute('hidden', true)

  robot.stop()
  audio.pause()
}

/**
 * Initialize the DOM
 */
window.onload = async () => {
  // Initialize audio visualizer
  // Ref: https://foobar404.github.io/Wave.js/#/docs
  const wave = new Wave()
  const options = { type: 'fireworks', colors: ['red'] }
  wave.fromElement('audio', 'canvas', options)

  // Initialize robot
  robot.enableUserDetection()

  // Poll user detection event
  let status = null
  while (true) {
    await sleep(3000)
    status = robot.getUserDetectionStatus()

    if (status === 'detected') {
      if (!firstFollow) { // prevent starting the interaction multiple times
        startInteraction()
        firstFollow = true
        firstStop = false // reset
      }
    } else {
      if (!firstStop) {
        reset()
        firstStop = true
        firstFollow = false // reset
      }
    }
  }
}
