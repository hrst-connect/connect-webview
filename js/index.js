const networkStatus = document.querySelector('#network-status');

window.addEventListener('offline', () => {
  console.log('Offline');
  networkStatus.innerHTML = 'OFFLINE';
});

window.addEventListener('online', () => {
  console.log('Online');
  networkStatus.innerHTML = 'ONLINE';
});