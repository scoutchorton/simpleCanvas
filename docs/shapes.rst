.. image:: ../images/fullLogo.png
	:alt: simpleCanvas logo
.. highlight:: js

Shapes
======

Methods
-------

``ellipse(x, y, w, h);``
#####################
 Draws a ellipse at ``(x, y)`` with a radius of ``w`` (x-axis) and ``h`` (y-axis).

 +------------------------------------------------+
 |Parameters                                      |
 +--------+---------------------------------------+
 |Variable|Description                            |
 +========+=======================================+
 |``x``   |x-position of the center of the ellipse|
 +--------+---------------------------------------+
 |``y``   |y-position of the center of the ellipse|
 +--------+---------------------------------------+
 |``w``   |x-axis radius of the ellipse           |
 +--------+---------------------------------------+
 |``h``   |y-axis radius of the ellipse           |
 +--------+---------------------------------------+

``line(x1, y1, x2, y2);``
######################
 Draws a line from ``(x1, y1)`` to ``(x2, y2)``.

 +--------------------------------------------+
 |Parameters                                  |
 +--------+-----------------------------------+
 |Variable|Description                        |
 +========+===================================+
 |``x1``  |x-position of the start of the line|
 +--------+-----------------------------------+
 |``y1``  |y-position of the start of the line|
 +--------+-----------------------------------+
 |``x2``  |x-position of the end of the line  |
 +--------+-----------------------------------+
 |``y2``  |y-position of the end of the line  |
 +--------+-----------------------------------+

``point(x, y);``
###############
 Draws a point at ``(x, y)`` with the width specified by the stroke weight.

 +--------------------------------+
 |Parameters                      |
 +--------+-----------------------+
 |Variable|Description            |
 +========+=======================+
 |``x``   |x-position of the point|
 +--------+-----------------------+
 |``y``   |y-position of the point|
 +--------+-----------------------+

``rect(x, y, w, h);``
#####################
 Draws a rectangle from ``(x,y)`` to ``(x+w, y+h)``.

 +------------------------------------+
 |Parameters                          |
 +--------+---------------------------+
 |Variable|Description                |
 +========+===========================+
 |``x``   |x-position of the rectangle|
 +--------+---------------------------+
 |``y``   |y-position of the rectangle|
 +--------+---------------------------+
 |``w``   |Width of the rectangle     |
 +--------+---------------------------+
 |``h``   |Height of the rectangle    |
 +--------+---------------------------+

``triangle(x1, y1, x2, y2, x3, y3);``
#####################################
 Draws a triangle with vertices at ``(x1, y1)``, ``(x2, y2)``, and ``(x3, y3)``.

 +--------+-------------------------------+
 |Parameters                              |
 +--------+-------------------------------+
 |Variable|Description                    |
 +========+===============================+
 |``x1``  |x-position of the first vertex |
 +--------+-------------------------------+
 |``y1``  |y-position of the first vertex |
 +--------+-------------------------------+
 |``x2``  |x-position of the second vertex|
 +--------+-------------------------------+
 |``y2``  |y-position of the second vertex|
 +--------+-------------------------------+
 |``x3``  |x-position of the third vertex |
 +--------+-------------------------------+
 |``y3``  |y-position of the third vertex |
 +--------+-------------------------------+
