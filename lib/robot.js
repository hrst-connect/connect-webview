// https://devhints.io/jsdoc

const MINIMUM_WAIT = 500 // minimum waiting period between joystick commands [msec].

/**
 * Robot pose. The coordinate system is defined as follows:
 * The X-axis points in the direction in front of the Home Base, the Y-axis points left, and Z-axis points up in a right-hand coordinate system. The Yaw angle is 0 degrees when the robot is sitting on the Home Base.
 * @static
 * @since v1.1.0
 * @typedef {Object} Pose
 * @property {Number} x - Position along the X-axis [m]
 * @property {Number} y - Position along the Y-axis [m]
 * @property {Number} yaw - Orientation around the Z-axis [deg]
 */

/**
 * Enum of Goto Status values.
 * @static
 * @readonly
 * @since v1.1.0
 * @enum {String}
 * @property {String} START Robot starts going to the location.
 * @property {String} CALCULATING Robot is calculating the path to the location.
 * @property {String} GOING Robot is going to the location.
 * @property {String} COMPLETE Robot has successfully arrived at the location.
 * @property {String} ABORTED Robot is unable to go to the location and has aborted the process.
 * @property {String} RELOCALIZING Robot has lost its position and/or orientation in the map and is attempting to re-localize itself. 
 */
const GOTO_STATUS = Object.freeze({
  START: 'start', 
  CALCULATING: 'calculating', 
  GOING: 'going', 
  COMPLETE: 'complete', 
  ABORTED: 'abort', 
  RELOCALIZING: 'reposing',
})

/**
 * Enum of User Detection Status values.
 * @static
 * @readonly
 * @since v1.1.0
 * @enum {String}
 * @property {String} IDLE Robot idling and is passively scanning for users within its field of view.
 * @property {String} DETECTED A person has been detected.
 * @property {String} LOST A person that was previously detected has been lost.
 */
const USER_DETECTION_STATUS = Object.freeze({
  IDLE: 'idle', 
  DETECTED: 'detected', 
  LOST: 'lost', 
  UNKNOWN: 'unknown',
})

/**
 * Asynchronous sleep function.
 * @private
 * @since v1.1.0
 * @param {Number} ms Sleep time [milliseconds].
 * @returns {Promise} Promise that will resolve when sleep is complete.
 */
const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Get device ID.
 * @static
 * @since v1.1.0
 * @returns {String} Unique device ID
 * @example
 * const id = getId(); // return the device's ID
 */
const getId = () => {
  let id = 'mockup'
  if (typeof connect !== 'undefined') {
    id = connect.getId()
  } else {
    console.log(`[Connect] Robot ID: ${id}`)
  }

  return id
}

/**
 * Commands the robot to use it's text-to-speech function. Language spoken will depend on the device's language settings.
 * @static
 * @since v1.1.0
 * @param {String} utterance Text that is to be spoken.
 * @example 
 * speak('Hello world'); // command the robot to say "Hello world"
 */
const speak = (utterance) => {
  if (typeof connect !== 'undefined') {
    connect.speak(utterance)
  } else {
    console.log(`[Connect] Speak: ${utterance}`)
  }
}

/**
 * Turns the robot by a predefined angle.
 * @static
 * @since v1.1.0
 * @param {Number} angle Rotation angle [deg]; where positive (+) is counter-clockwise and negative (-) is clockwise [-180, +180].
 * @example
 * turn(+90); // turn 90 degrees to the left
 * turn(-90); // turn 90 degrees to the right
 */
const turn = (angle) => {
  if (typeof connect !== 'undefined') {
    connect.turn(angle, 1.0)
  } else {
    console.log(`[Connect] Turn by: ${angle}`)
  }
}

/**
 * Tilts the screen of the robot by a predefined angle.
 * @static
 * @since v1.1.0
 * @param {Number} angle Tilt angle [deg]; where positive (+) tilts the screen upwards and negative (-) tilts the screen downwards [-25, +55].
 * @example
 * tilt(+55); // tilt the screen all the way up
 * tilt(-25); // tilt the screen all the way down
 */
const tilt = (angle) => {
  if (typeof connect !== 'undefined') {
    connect.tilt(angle, 1.0, false)
  } else {
    console.log(`[Connect] Tilt by: ${angle}`)
  }
}

/**
 * Follows the person standing in front of it while maintaining a fixed position.
 * @static
 * @since v1.1.0
 * @example
 * follow(false); // Commands the robot to start following any person standing in front of it
 * follow(true); // Commands the robot to start following (or tracking) any person standing in front of it while remaining in a stationary position
 */
const follow = () => {
  if (typeof connect !== 'undefined') {
    connect.follow(true)
  } else {
    console.log('[Connect] Follow')
  }
}

/**
 * Sends a single joystick command to the robot. Commands must be continuously sent, otherwise the robot will stop moving after a 500 millisecond timeout.
 * @private
 * @since v1.1.0
 * @param {Number} trans Translational velocity; where -1 is full-speed backwards and +1 is full-speed forwards [-1, +1].
 * @param {Number} rot Rotational velocity; where positive (+) is counter-clockwise and negative (-) is clockwise [-1, +1].
 */
const joystick = (trans, rot) => {
  if (typeof connect !== 'undefined') {
    connect.joystick(trans, rot)
  } else {
    console.log(`[Connect] Joystick: (${trans}, ${rot})`)
  }
}

/**
 * Continuously sends joystick commands for a predefined period.
 * @static
 * @since v1.1.0
 * @param {Number} trans Translational velocity; where -1 is full-speed backwards and +1 is full-speed forwards [-1, +1].
 * @param {Number} rot Rotational velocity; where positive (+) is counter-clockwise and negative (-) is clockwise [-1, +1].
 * @param {Number} period Period of time in which the robot is commanded to move.
 * @example
 * move(1.0, 0, 1); // moves the robot full-speed forward for 1 second
 * move(-1.0, 0, 1); // moves the robot full-speed backward for 1 second
 * move(0, 1.0, 1); // rotates the robot full-speed counter-clockwise for 1 second
 * move(0, -1.0, 1); // rotates the robot full-speed clockwise for 1 second
 */
const move = async (trans, rot, period) => {
  const iter = Math.round(period / MINIMUM_WAIT)
  for (let i = 0; i < iter; i++) {
    joystick(trans, rot)
    await sleep(MINIMUM_WAIT)
  }
} 

/**
 * Commands the robot to stop moving.
 * @static
 * @since v1.1.0
 * @example
 * stop(); // stops the robot from moving and/or following
 */
const stop = () => {
  if (typeof connect !== 'undefined') {
    connect.stop()
  } else {
    console.log('[Connect] Stop')
  }
}

/**
 * Gets the name of all predefined locations.
 * @static
 * @since v1.1.0
 * @returns {String[]} An array of of location names.
 * @example
 * const locations = getLocations();
 * 
 * locations.forEach((locationName) => {
 *  console.log(locationName)
 * });
 */
const getLocations = () => {
  let locations = []
  if (typeof connect !== 'undefined') {
    locations = JSON.parse(connect.getLocations())
  } else {
    console.log('[Connect] Locations:', locations)
  }

  return locations
}

/**
 * Sends the robot to a predefined location.
 * @static
 * @since v1.1.0
 * @param {String} locationName Name of the location, as spelled out in the `Locations` list.
 * @example
 * gotoLocation('home base'); // sends the robot to the Home Base
 */
const gotoLocation = (locationName) => {
  if (typeof connect !== 'undefined') {
    connect.gotoLocation(locationName)
  } else {
    console.log(`[Connect] Goto: ${locationName}`)
  }
}

/**
 * Gets the current pose of the robot, with respect to the Home Base.
 * @static
 * @since v1.1.0
 * @returns {Pose} The robot's current {@link Pose}
 * @example
 * const pose = getPose(); // get the current pose of the robot
 */
const getPose = () => {
  let pose = { x: 0, y: 0, yaw: 0}
  if (typeof connect !== 'undefined') {
    const obj = JSON.parse(connect.getPose())
    if (obj) {
      pose = obj
    }
  } else {
    console.log(`[Connect] Pose: (${pose.x}, ${pose.y}) | Yaw: ${pose.yaw}`)
  }

  return pose
}

/**
 * Sets the robot's pose, with respect to the Home Base.
 * @static
 * @since v1.1.0
 * @param {Number} x Position along the X-axis, with respect to the Home Base [m]
 * @param {Number} y Position along the Y-axis, with respect to the Home Base [m]
 * @param {Number} yaw Orientiation around the Z-axis, with respect to the Home Base [deg]
 * @example
 * gotoPose(1.0, 0.0, 90, 30); // sends the robot to 1.0 m in front of the Home Base, rotated 90 degrees counter-clockwise with respect to the Home Base position, and tilts the screen up by 30 degrees
 */
const gotoPose = (x, y, yaw) => {
  if (typeof connect !== 'undefined') {
    connect.gotoPose(x, y, yaw)
  } else {
    console.log(`[Connect] Goto: (${x}, ${y}, ${yaw})`)
  }
}

/**
 * Gets the current 'goto' status.
 * @static
 * @since v1.1.0
 * @returns {String} Goto status, see {@link GOTO_STATUS}
 * @example
 * const status = getGotoStatus(); // get the current goto status
 */
const getGotoStatus = () => {
  let status = null
  if (typeof connect !== 'undefined') {
    status = connect.getGotoStatus()
  } else {
    console.log(`[Connect] Goto Status: ${status}`)
  }

  return status
}

/**
 * Enable user detection.
 * Connect-Android app must be in Kiosk mode and 'Settings' permission must be enabled.
 * @static
 * @since v1.1.0
 * @example
 * enableUserDetection(); // initialize user detection
 */
const enableUserDetection = () => {
  if (typeof connect !== 'undefined') {
    status = connect.enableUserDetection()
  } else {
    console.log('[Connect] Enable user detection')
  }
}

/**
 * Disable user detection.
 * Connect-Android app must be in Kiosk mode and 'Settings' permission must be enabled.
 * @static
 * @since v1.1.0
 * @example
 * disableUserDetection(); // disable user detection
 */
const disableUserDetection = () => {
  if (typeof connect !== 'undefined') {
    status = connect.disableUserDetection()
  } else {
    console.log('[Connect] Disable user detection')
  }
}

/**
 * Gets the user detection status.
 * @static
 * @since v1.1.0
 * @returns {String} User-detection status, see {@link USER_DETECTION_STATUS}.
 * @example
 * const status = getUserDetectionStatus(); // get the current user detection status
 */
const getUserDetectionStatus = () => {
  let status = null
  if (typeof connect !== 'undefined') {
    status = connect.getUserDetectionStatus()
  } else {
    console.log(`[Connect] User Detection Status: ${status}`)
  }

  return status
}

export {
  getId,
  speak,
  turn,
  tilt,
  follow,
  move,
  stop,
  getLocations,
  gotoLocation,
  getPose,
  gotoPose,
  getGotoStatus,
  enableUserDetection,
  disableUserDetection,
  getUserDetectionStatus,
  GOTO_STATUS,
  USER_DETECTION_STATUS,
}
