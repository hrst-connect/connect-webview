const RESOURCE_POOL_ID = ''; // insert resource pool ID here

const callButton = document.querySelector('#call-button');

function callOperator() {
  console.log(`Resource ID: ${RESOURCE_POOL_ID}`);

  // Check if this device is using Connect
  if (typeof connect !== 'undefined') {
    connect.call(RESOURCE_POOL_ID);
  } else {
    alert('Sorry, this will only work on Connect');
  }
}

function onResourcePoolStatusChange(availableMembers) {
  if (availableMembers > 0) {
    console.log('Available');
    callButton.style.display = 'block';
  } else {
    console.log('Unavailable');
    callButton.style.display = 'none';
  }
}

window.onload = () => {  
  // Initialize call button
  callButton.style.display = 'block';  
  callButton.addEventListener('click', callOperator);
  
  // Initialize status listener
  if (typeof connect !== 'undefined') {
    connect.addResourcePoolStatusListener('onResourcePoolStatusChange', RESOURCE_POOL_ID);
  }
};
