Resource Pool
=============

connect.call()
--------------
Initiates a call to an available operator of a given resource pool.

Syntax
++++++
.. code-block:: JavaScript

  connect.call(resourcePoolId);

:resourcePoolId: A resource pool's unique identifier `String`_.
:returns: `undefined`_

Example
+++++++
HTML

.. code-block:: HTML

  <button type="button" id="button-call">Call</button>

JavaScript

.. code-block:: JavaScript

  const RESOURCE_POOL_ID = ''; // insert your resource pool ID

  const buttonCall = document.querySelector('#button-call');
  buttonCall.addEventListener('click', () => {
    connect.call(RESOURCE_POOL_ID);
  });


connect.addResourcePoolStatusListener()
---------------------------------------
Sets up a function that will be called whenever the status of the resource pool changes.

Syntax
++++++
.. code-block:: JavaScript

  connect.addResourcePoolStatusListener(listener, resourcePoolId);

:listener: A `String`_ name of the JavaScript function that will receive a notification when the status of the resource pool changes. The function must have ``availableOperators`` as an argument, which indicates the number of operators in a resource pool that are currently available.
:resourcePoolId: A resource pool's unique identifier `String`_.
:returns: `undefined`

Example
+++++++
HTML

.. code-block:: HTML

  <h1 id="status"></h1>

JavaScript

.. code-block:: JavaScript

  const RESOURCE_POOL_ID = ''; // insert your resource pool ID

  // Status listener
  const operatorStatus = document.querySelector('#status');
  function onResourcePoolStatusChange(availableOperators) {
    operatorStatus.innerHTML = `Available Operators: ${availableOperators}`;
  }

  // Register status listener
  connect.addResourcePoolStatusListener('onResourcePoolStatusChange', RESOURCE_POOL_ID);


.. References

.. _undefined: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined
.. _Number: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
.. _String: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
.. _Array: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
