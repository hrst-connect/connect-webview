import robot from '../lib/robot.js'

// Command the robot to speak
document.querySelector('#button-speak').addEventListener('click', () => {
  robot.speak("Hello World");
});
