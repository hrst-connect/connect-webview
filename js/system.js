// Check and display network status
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
  if (navigator.onLine) {
    networkStatus.innerHTML = 'ONLINE';
    networkStatus.style.color = 'green';  
  }

  const connectResource = document.querySelector('#connect-resource');
  if (typeof connect !== 'undefined') {
    connectResource.innerHTML = 'This page will only work properly on Connect'
  }
});
