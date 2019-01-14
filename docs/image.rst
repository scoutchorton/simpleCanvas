.. image:: ./fullLogo.png
	:alt: simpleCanvas logo
.. highlight:: js

Image
=====

Methods
-------

``getImage(src);``
##################
 Returns image at ``src``.

 +---------------------+
 |Parameters           |
 +--------+------------+
 |Variable|Description |
 +========+============+
 |``src`` |src of image|
 +--------+------------+

``image(image, x, y, w, h);``
#############################
 Draws ``image`` at ``(x, y)``.

 If ``w`` and ``h`` are not provided, the image defaults to actual size.

 +------------------------------------+
 |Parameters                          |
 +---------+--------------------------+
 |Variable |Description               |
 +=========+==========================+
 |``image``|Image from ``getImage();``|
 +---------+--------------------------+
 |``x``    |x-position of image       |
 +---------+--------------------------+
 |``y``    |y-position of image       |
 +---------+--------------------------+
 |``w``    |(Optional) Width of image |
 +---------+--------------------------+
 |``h``    |(Optional) Height of image|
 +---------+--------------------------+
