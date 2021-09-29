import robot from '../../../../lib/robot.js'

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const twist = async (iter) => {
  for (let i = 0; i < iter; i++) {
    robot.turn(+90)
    await sleep(1500)
    robot.turn(-180)
    await sleep(3000)
    robot.turn(+90)
    await sleep(1500)
  }
}

const headbang = async (iter) => {
  for (let i = 0; i < iter; i++) {
    robot.tilt(-15)
    await sleep(1000)
    robot.tilt(45)
    await sleep(1000)
  }
}

const dance = (() => {
  const start = async () => {
    robot.speak("Begin")
    robot.tilt(0)
    await sleep(2000) // warm-up navigation
  
    await twist(2)
    await headbang(3)
    await twist(2)

    await robot.move(1.0, 0.0, 2000)
    await robot.move(-1.0, 0.0, 2000)

    await twist(2)
    await headbang(3)
    await twist(2)

    console.log('Done')
  }

  const stop = () => {
    robot.stop()
  }

  return { start, stop }
})()

export default dance
