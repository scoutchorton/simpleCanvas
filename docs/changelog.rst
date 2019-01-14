.. image:: ./fullLogo.png
	:alt: simpleCanvas logo

Changelog
=========

v0.2.0 (latest)
---------------

 Added
 ^^^^^

  - Keyboard and mouse interaction

  - Variables
    ~~~~~~~~~

   - CENTER
   - color
   - keyCode
   - keyDown
   - keyFocus
   - keyIsPressed
   - keyPressed
   - keys
   - keyUp
   - key
   - LEFT
   - mouseButton
   - mouseClicked
   - mouseDragged
   - mouseFocus
   - mouseMoved
   - mouseOver
   - mouseOut
   - mousePressed
   - mouseReleased
   - negativeMouse
   - RIGHT

 Fixes
 ^^^^^

   - Issue with black background being drawn using ``background();``
    - Tested with iOS 12.1.2 on Safari 12.0 and Google Chrome 71.0.3578.89

 Changes
 ^^^^^^^

   - ``color();`` uses string interpolation when returning color values
    - Switched from using strings added together
   - ``HEX`` and ``HSL`` use ternary conditions for default values
   - Kept documentation in ``/docs`` folder, but moved webpage stuff to root of repository
   - ``mouseX`` and ``mouseY`` can be negative
    - Only if ``negativeMouse = true``
   - Variables are in the ``simpleCanvas()`` scope instead of global scope
    - Varables affected: ``HEX, HSL, RGB``

v0.1.0
------

 Added
 ^^^^^

   - All base code
   - All documentation (`ReadTheDocs <https://simplecanvas.readthedocs.io/en/latest/>`_)

   - Methods
     ~~~~~~~

    - ``background();``
    - ``colorMode();``
    - ``ellipse();``
    - ``fill();``
    - ``getImage();``
    - ``image();``
    - ``line();``
    - ``noFill();``
    - ``noStroke();``
    - ``point();``
    - ``rect();``
    - ``resize();``
    - ``stroke();``
    - ``triangle();``

   - Variables
     ~~~~~~~~~

    - ``HEX``
    - ``HSL``
    - ``RGB``
    - ``draw``
