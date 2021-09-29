import robot from '../lib/robot.js'

const locationList = document.querySelector('#location-list');

// Create a list of locations  
window.addEventListener('load', () => {
  const locations = robot.getLocations()
  
  locations.forEach((location) => {
    const option = document.createElement('option');
    option.innerHTML = location;
    locationList.appendChild(option);
  });
});

// Goto location listener
locationList.addEventListener('change', (event) => {
  const selectedLocation = event.target.value;
  robot.gotoLocation(selectedLocation);
});
