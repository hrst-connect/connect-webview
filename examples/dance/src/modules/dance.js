import robot from './robot'

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

const dance = async () => {
  robot.speak("Start")
  robot.tilt(0)
  await sleep(2000) // warm-up navigation

  await twist(3)
  await robot.move(1.0, 0.0, 2000)
  await twist(3)

  console.log('Done')
}

export default dance
