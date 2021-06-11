let turnState = 0;
let tiltState = 0;

const buttonTurn = document.querySelector('#button-turn');
buttonTurn.addEventListener('click', (event) => {
  if (turnState) {
    connect.turnBy(+90); // [degrees]
  } else {
    connect.turnBy(-90); // [degrees]
  }
  turnState ^= 1; // toggle state
});

const buttonTilt = document.querySelector('#button-tilt');
buttonTilt.addEventListener('click', (event) => {
  if (tiltState) {
    connect.tiltBy(+55); // [degrees]
  } else {
    connect.tiltBy(-25); // [degrees]
  }
  tiltState ^= 1; // toggle state
});
