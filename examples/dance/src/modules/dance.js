import robot from '../../../_lib/robot.js'

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const twist = async (iter) => {
  for (let i = 0; i < iter; i++) {
    robot.turn(+180)
    await sleep(3000)
    robot.turn(-180)
    await sleep(3000)
  }
}

const dance = (() => {
  const start = async () => {
    robot.speak("Tomita")
    robot.tilt(0)
    await sleep(2000) // warm-up navigation
  
    await twist(2)
    await robot.tilt(-15)
    await sleep(1000)
    await robot.tilt(45)
    await sleep(1000)
    await robot.tilt(0)
    await twist(2)

    await robot.move(1.0, 0.0, 2000)
    await robot.move(-1.0, 0.0, 2000)

    await twist(2)
    await robot.tilt(-15)
    await sleep(1000)
    await robot.tilt(45)
    await sleep(1000)
    await robot.tilt(0)
    await twist(2)

    console.log('Done')
  }

  const stop = () => {
    robot.stop()
  }

  return { start, stop }
})()

export default dance
