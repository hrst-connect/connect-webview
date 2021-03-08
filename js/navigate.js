// Go to location event listener
const locationList = document.querySelector('#location-list');
locationList.addEventListener('change', (event) => {
  const selectedLocation = event.target.value;
  connect.gotoLocation(selectedLocation);
});

window.addEventListener('load', () => {
  // Create a list of locations  
  const locations = JSON.parse(connect.getLocations());
  locations.forEach((location) => {
    const option = document.createElement('option');
    option.innerHTML = location;
    locationList.appendChild(option);
  });
});
