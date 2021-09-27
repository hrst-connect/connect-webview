/**
 * Asynchronous sleep function
 * @param {Number} ms Sleep time [milliseconds] 
 * @returns Promise that will resolve when sleep is complete
 */
 const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * A wrapper around Connect's API that can be used with Connect-Android or a regular web-browser.
 * Used for "simulating" robot's behaviour in a web-browser.
 */
const robot = (() => {
  const MINIMUM_WAIT = 500 // minimum waiting period between joystick commands [msec]

  /**
   * Get device ID
   * @returns Unique device ID
   */
  const getId = () => {
    let id = 'mockup'
    if (typeof connect !== 'undefined') {
      id = connect.getId()
    }
    console.log(`Robot ID: ${id}`)
    return id
  }

  /**
   * Commands the robot to use it's text-to-speech function.
   * @param {String} utterance Text that is to be spoken. 
   */
   const speak = (utterance) => {
    if (typeof connect !== 'undefined') {
      connect.speak(utterance)
    }
    console.log(`Speak: ${utterance}`)
  }

  /**
   * Turns the robot by a predefined angle.
   * @param {Number} angle Rotation angle; where positive (+) is counter-clockwise and negative (-) is clockwise [-180, +180] 
   */
  const turn = (angle) => {
    if (typeof connect !== 'undefined') {
      connect.turn(angle, 1.0)
    }
    console.log(`Turn by: ${angle}`)
  }

  /**
   * Tilts the screen of the robot by a predefined angle.
   * @param {Number} angle Tilt angle; where positive (+) tilts the screen upwards and negative (-) tilts the screen downwards [-25, +45] 
   */
  const tilt = (angle) => {
    if (typeof connect !== 'undefined') {
      connect.tilt(angle, 1.0, false)
    }
    console.log(`Tilt by: ${angle}`)
  }

  /**
   * Follows user (fixed position)
   */
  const follow = () => {
    if (typeof connect !== 'undefined') {
      connect.follow()
    }
    console.log('Follow')
  }

  /**
   * Sends a single joystick command to the robot. Commands must be continuously sent, otherwise the robot will stop moving after a 500 millisecond timeout.
   * @param {Number} trans Translational velocity; where -1 is full-speed backwards and +1 is full-speed forwards [-1, +1].
   * @param {Number} rot Rotational velocity; where -1 is full-speed counter-clockwise and +1 is full-speed clockwise [-1, +1].
   */
   const joystick = (trans, rot) => {
    if (typeof connect !== 'undefined') {
      connect.joystick(trans, rot)
    }
    console.log(`Joystick: (${trans}, ${rot})`)
  }

  /**
   * Continuously sends joystick commands for a predefined period.
   * @param {Number} trans Translational velocity; where -1 is full-speed backwards and +1 is full-speed forwards [-1, +1].
   * @param {Number} rot Rotational velocity; where -1 is full-speed counter-clockwise and +1 is full-speed clockwise [-1, +1].
   * @param {Number} period Period of time in which the robot is commanded to move. 
   */
  const move = async (trans, rot, period) => {
    const iter = Math.round(period / MINIMUM_WAIT)
    for (let i = 0; i < iter; i++) {
      joystick(trans, rot)
      await sleep(MINIMUM_WAIT)
      console.log(`Move: (${trans}, ${rot}) | Iterations: ${i}/${iter}`)
    }
  } 

  /**
   * Commands the robot to stop moving.
   */
   const stop = () => {
    if (typeof connect !== 'undefined') {
      connect.stop()
    }
    console.log('Stop')
  }

  /**
   * Gets the name of all predefined locations.
   * @returns An array of of location names.
   */
  const getLocations = () => {
    let locations = []
    if (typeof connect !== 'undefined') {
      locations = JSON.parse(connect.getLocations())
    }
    console.log('Locations:', locations)
    return locations
  }

  /**
   * Sends the robot to a predefined location.
   * @param {String} locationName Name of the location, as spelled out in the `Locations` list.
   */
   const gotoLocation = (locationName) => {
    if (typeof connect !== 'undefined') {
      connect.gotoLocation(locationName)
    }
    console.log(`Goto: ${locationName}`)
  }

  /**
   * Gets the current pose of the robot, with respect to the Home Base. The coordinate system is defined as follows:
   * The X-axis points in the direction in front of the Home Base, the Y-axis points left, and Z-axis points up in a right-hand coordinate system.
   * @returns An object {x, y, yaw} that defines the pose of the robot.
   */
   const getPose = () => {
    let pose = { x: 0, y: 0, yaw: 0}
    if (typeof connect !== 'undefined') {
      pose = JSON.parse(connect.getPose())
      console.log(pose.yaw)
    }
    console.log(`Pose: (${pose.x}, ${pose.y}) | Yaw: ${pose.yaw}`)
    return pose
  }

  /**
   * Sets the robot's pose, with respect to the Home Base. The coordinate system is defined as follows:
   * The X-axis points in the direction in front of the Home Base, the Y-axis points left, and Z-axis points up in a right-hand coordinate system.
   * The Yaw angle is 0 degrees when the robot is sitting on the Home Base.
   * @param {Number} x Position along the X-axis, with respect to the Home Base.
   * @param {Number} y Position along the Y-axis, with respect to the Home Base.
   * @param {Number} yaw Orientiation around the Z-axis, with respect to the Home Base.
   */
  const gotoPose = (x, y, yaw) => {
    if (typeof connect !== 'undefined') {
      connect.gotoPose(x, y, yaw)
    }
    console.log(`Goto: (${x}, ${y})`)
  }

  /**
   * Gets the current `goto` status.
   * @returns A string indicating the current `goto` status. This can be one of the following values:
   * ['start', 'calculating', 'going', 'complete', 'abort', 'reposing'] 
   */
  const getGotoStatus = () => {
    let status = null
    if (typeof connect !== 'undefined') {
      status = connect.getGotoStatus()
    }
    console.log(`Goto Status: ${status}`)
    return status
  }

  /**
   * Enable user detection
   * Note: Connect-Android app must be in Kiosk mode and `Settings` permission must be enabled
   */
  const enableUserDetection = () => {
    if (typeof connect !== 'undefined') {
      status = connect.enableUserDetection()
    }
    console.log('Enable user detection')
  }

  /**
   * Disable user detection
   * Note: Connect-Android app must be in Kiosk mode and `Settings` permission must be enabled
   */
  const disableUserDetection = () => {
    if (typeof connect !== 'undefined') {
      status = connect.disableUserDetection()
    }
    console.log('Disable user detection')
  }

  /**
   * Gets the user detection status.
   * @returns A string indicating the current `user detection` status. This can be one of the following values:
   * ['idle', 'lost', 'detected', 'unknown'] 
   */
  const getUserDetectionStatus = () => {
    let status = null
    if (typeof connect !== 'undefined') {
      status = connect.getUserDetectionStatus()
    }
    console.log(`User Detection Status: ${status}`)
    return status
  }

  return {
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
  }
})()

export default robot
