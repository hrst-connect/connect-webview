// Command the robot to speak
document.querySelector('#button-speak').addEventListener('click', () => {
  connect.speak("Hello World");
});
