let turnState = false;
let tiltState = false;

document.querySelector('#button-turn').addEventListener('click', (event) => {
  if (turnState) {
    connect.turn(+90, 1.0); // [degrees]
  } else {
    connect.turn(-90, 1.0); // [degrees]
  }
  turnState = !turnState; // toggle state
});

document.querySelector('#button-tilt').addEventListener('click', (event) => {
  if (tiltState) {
    connect.tilt(+55, 1.0, false) // [degrees]
  } else {
    connect.tilt(-25, 1.0, false); // [degrees]
  }
  tiltState = !tiltState; // toggle state
});
