let turnState = false;
let tiltState = false;

const buttonTurn = document.querySelector('#button-turn');
buttonTurn.addEventListener('click', (event) => {
  if (turnState) {
    connect.turnBy(+90); // [degrees]
  } else {
    connect.turnBy(-90); // [degrees]
  }
  turnState = !turnState; // toggle state
});

const buttonTilt = document.querySelector('#button-tilt');
buttonTilt.addEventListener('click', (event) => {
  if (tiltState) {
    connect.tiltBy(+55); // [degrees]
  } else {
    connect.tiltBy(-25); // [degrees]
  }
  tiltState = !tiltState; // toggle state
});
