const networkStatus = document.querySelector('#network-status');
window.addEventListener('offline', () => {
  networkStatus.innerHTML = 'OFFLINE';
  networkStatus.style.color = 'red';
});
window.addEventListener('online', () => {
  networkStatus.innerHTML = 'ONLINE';
  networkStatus.style.color = 'green';
});

window.addEventListener('load', () => {
  // Check and display network status
  if (navigator.onLine) {
    networkStatus.innerHTML = 'ONLINE';
    networkStatus.style.color = 'green';  
  }

  // Check if `connect` resource is available
  const connectResource = document.querySelector('#connect-resource');
  if (typeof connect == 'undefined') {
    connectResource.innerHTML = 'This page will only work properly on Connect'
    connectResource.style.color = 'red';
  }
});
