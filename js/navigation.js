// Create a list of locations  
window.addEventListener('load', () => {
  if (typeof connect !== 'undefined') {
    const locations = JSON.parse(connect.getLocations());
    locations.forEach((location) => {
      const option = document.createElement('option');
      option.innerHTML = location;
      locationList.appendChild(option);
    });
  }
});

// Goto location listener
const locationList = document.querySelector('#location-list');
locationList.addEventListener('change', (event) => {
  const selectedLocation = event.target.value;
  connect.gotoLocation(selectedLocation);
});
