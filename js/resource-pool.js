const RESOURCE_POOL_ID = ''; // insert your resource pool ID here

// Resource pool status listener
function onResourcePoolStatusChange(availableOperators) {
  const operatorStatus = document.querySelector('#operator-status');
  
  if (availableOperators > 0) {
    operatorStatus.innerHTML = `Available (${availableOperators})`;
    operatorStatus.style.color = 'green';
  } else {
    operatorStatus.innerHTML = 'Unavailable';
    operatorStatus.style.color = 'red';
  }
}

// Register resource pool status listener
window.addEventListener('load', () => {
  document.querySelector('#resource-pool').innerHTML = `${RESOURCE_POOL_ID}`;
  if (typeof connect !== 'undefined') {
    connect.addResourcePoolStatusListener('onResourcePoolStatusChange', RESOURCE_POOL_ID);
  }
});

// Call resource pool
document.querySelector('#button-call').addEventListener('click', () => {
  if (typeof connect !== 'undefined') {
    connect.call(RESOURCE_POOL_ID);
  }
});
