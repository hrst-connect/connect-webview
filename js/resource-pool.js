const RESOURCE_POOL_ID = 'xxUC9cEdWkWKBb9fk4PJ'; // insert your resource pool ID here

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
  connect.addResourcePoolStatusListener('onResourcePoolStatusChange', RESOURCE_POOL_ID);
});

const buttonCall = document.querySelector('#button-call');
buttonCall.addEventListener('click', () => {
  connect.call(RESOURCE_POOL_ID);
});
