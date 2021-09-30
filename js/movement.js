import * as robot from '../lib/robot.js'

let turnState = false;
let tiltState = false;

document.querySelector('#button-turn').addEventListener('click', (event) => {
  if (turnState) {
    robot.turn(+90); // [degrees]
  } else {
    robot.turn(-90); // [degrees]
  }
  turnState = !turnState; // toggle state
});

document.querySelector('#button-tilt').addEventListener('click', (event) => {
  if (tiltState) {
    robot.tilt(+55); // [degrees]
  } else {
    robot.tilt(-25); // [degrees]
  }
  tiltState = !tiltState; // toggle state
});
