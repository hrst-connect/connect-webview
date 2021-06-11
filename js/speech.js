const buttonSpeak = document.querySelector('#button-speak');
buttonSpeak.addEventListener('click', () => {
  connect.speak("Hello World");
});
