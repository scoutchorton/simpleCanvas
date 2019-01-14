.. image:: ./images/fullLogo.png
	:alt: simpleCanvas logo
.. highlight:: js

Canvas Interaction
==================

Methods
-------

``resize(w, h);``
#################

 Sets the width and height in pixels of the canvas.

 +-----------------------------+
 |Parameters                   |
 +--------+--------------------+
 |Variable|Description         |
 +========+====================+
 |``w``   |New width of canvas |
 +--------+--------------------+
 |``h``   |New height of canvas|
 +--------+--------------------+

Variables
---------

``CENTER``
##########
 Returns ``'center'``.

 Used with `mouseDown <mouseDown_>`_.

``keyCode``
###########
 Returns a number that corresponds to a key on the keyboard.

``keyDown = function(){};``
###########################
 When assigned a function, the function's code will run when a key is pressed down.

``keyFocus``
############
 Returns ``true`` if the canvas is catching key events.

``keyIsPressed``
################
 Returns ``true`` if a key is pressed

``keyPressed = function(){};``
##############################
 When assigned a function, the function's code will run when a key is held down.

``keys``
########
 ``keys[code] = true`` if the key is down, and ``keys[code] = false`` when the key is up. If a key hasn't been pressed yet, ``keys[code] = undefined``.
 ``code`` is the ``keyCode`` of a key.

``keyUp = function(){};``
#########################
 When assigned a function, the function's code will run when a key is released.

``key``
#######
 Returns the character for the key.

``LEFT``
########
 Returns ``'left'``.

 Used with `mouseDown <mouseDown_>`_.

``mouseButton``
###############
 Returns ``LEFT, CENTER, RIGHT`` depending on the mouse button pressed.

``mouseClicked = function(){};``
################################
 When assigned a function, the function's code will run when a mouse button is pressed down.

``mouseDragged = function(){};``
################################
 When assigned a function, the function's code will run when the mouse is moved while a button is held down.

.. _mouseDown:

``mouseDown = function(){};``
#############################
 When assigned a function, the function's code will run when a mouse button is held down.

``mouseFocus``
##############
 Returns ``true`` if the canvas is catching clicking events.

 ``true`` if inside canvas and ``false`` if outside canvas.

``mouseMoved = function(){};``
##############################
 When assigned a function, the function's code will run when the mouse is moved over the canvas.

``mouseOver = function(){};``
#############################
 When assigned a function, the function's code will run when the mouse is moved over the canvas.

``mouseOut = function(){};``
############################
 When assigned a function, the function's code will run when the mouse leaves the canvas.

``mousePressed = function(){};``
################################
 When assigned a function, the function's code will run when a mouse button is held down.

``mouseReleased = function(){};``
#################################
 When assigned a function, the function's code will run when a mouse button is released.

``negativeMouse``
#################
 Set to ``true`` to have ``mouseX`` and ``mouseY`` return negative values.

``RIGHT``
#########
 Returns ``'right'``.

 Used with `mouseDown <mouseDown_>`_.