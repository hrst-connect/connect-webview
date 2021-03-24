const RESOURCE_POOL_ID = 'FV4ICw4bxD7qRa92qGA1';

// Call button event listener
const buttonCall = document.querySelector('#button-call');
buttonCall.addEventListener('click', () => {
  // Check if this device is using Connect
  if (typeof connect !== "undefined") {
    connect.call(RESOURCE_POOL_ID);
  } else {
    alert("Sorry, this will only work on Connect");
  }
});

// Operator status listener
function onOperatorStatusChange(availableMembers) {
  const operatorStatus = document.querySelector('#operator-status');
  if (availableMembers > 0) {
    operatorStatus.innerHTML = `Available (${availableMembers})`;
  } else {
    operatorStatus.innerHTML = 'Unavailable';
  }
}

// Loading window
window.addEventListener('load', () => {
  document.querySelector('#resource-pool').innerHTML = `${RESOURCE_POOL_ID}`;
  
  // Register resource pool status listener
  if (typeof connect !== "undefined") {
    connect.addStatusListener('onOperatorStatusChange', RESOURCE_POOL_ID);
  }
});
