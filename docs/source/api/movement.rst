Movement
========

connect.turnBy()
----------------
Commands the robot to rotate its mobile base by a given angle.

Syntax
++++++
.. code-block:: JavaScript

  connect.turnBy(angle);

:angle: Relative angle (degrees) by which to turn its mobile base. A positive value turns to the left. A negative value turns to the right.
:returns: `undefined`_

Example
+++++++

JavaScript

.. code-block:: JavaScript

  connect.turnBy(+90); // turn 90 degrees to the left
  connect.turnBy(-90); // turn 90 degrees to the right


connect.tiltBy()
----------------
Commands the robot to tilt its screen by a given angle.

Syntax
++++++
.. code-block:: JavaScript

  connect.tiltBy(angle);

:angle: Relative angle (degrees) by which to tilt its screen. A positive value tilts the screen upwards. A negative value tilts the screen downwards. Values can range between ``-25`` to ``+55`` degrees.
:returns: `undefined`_

Example
+++++++
JavaScript

.. code-block:: JavaScript

  connect.tiltBy(+55); // tilt the screen all the way up
  connect.tiltBy(-25); // tilt the screen all the way down


.. References

.. _undefined: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined
.. _Number: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
.. _String: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
.. _Array: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
