Navigation
==========

connect.gotoLocation()
----------------------
Commands the robot to go to a predefined location.

Syntax
++++++
.. code-block:: JavaScript

  connect.gotoLocation(locationName);

:locationName: A location name `String`_.
:returns: `undefined`_

Example
+++++++
JavaScript

.. code-block:: JavaScript

  connect.goto('home base');

connect.getLocations()
----------------------
Returns a list of all saved locations.

Syntax
++++++
.. code-block:: JavaScript

  connect.getLocations();

:returns: A `String`_ `Array`_ of all saved locations.

Example
+++++++
HTML

.. code-block:: HTML

  <select id="location-list"></select> 

JavaScript

.. code-block:: JavaScript

  const locationList = document.querySelector('#location-list');
    
  const locations = JSON.parse(connect.getLocations());
  locations.forEach((location) => {
    const option = document.createElement('option');
    option.innerHTML = location;
    locationList.appendChild(option);
  });


.. References

.. _undefined: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined
.. _Number: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
.. _String: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
.. _Array: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
