.. image:: ./images/fullLogo.png
    :alt: simpleCanvas logo

Getting Started
===============

Beginner's Guide
----------------

Example HTML document setup
###########################
When using simpleCanvas, here is an example setup of what your document could be:

.. code-block:: html
  :linenos:

  <!DOCTYPE html>
  <html>
   <head>
    <script src="https://scoutchorton.github.io/simpleCanvas/simpleCanvas.min.js"></script>
    <script>
     window.onload = function() {
      var c = new simpleCanvas('canvas');

      c.draw = function() {
       rect(20, 20, 50, 50);
      }
     }
    </script>
   </head>
   <body>
    <canvas id="canvas"></canvas>
   </body>
  </html>

What's important here is to have the script link on line 4 correct, your code for drawing on the canvas running when the page loads, the ``new simpleCanvas()`` line stored to a variable, and obviously the canvas element to draw to.
