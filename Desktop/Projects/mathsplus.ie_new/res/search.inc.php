<?php

/*****************
	GENERAL SETTINGS
*****************/
$imSettings['search']['general'] = array(
	'menu_position' => 'left',
	'defaultScope' => array(
		'0' => 'index.html',
		'3' => 'order.html',
		'7' => 'junior-certificate.html',
		'8' => 'revision-class.html'
	),
	'extendedScope' => array(
	)
);

/*****************
	PRODUCTS SEARCH
*****************/
$imSettings['search']['products'] = array(
	'nb0di000' => array(
		'name' => 'LCO Book',
		'description' => 'LCO 2009-2002 Revision Book',
		'image' => '<div class="imProductListImage"><img src="cart/images/no-preview.gif" alt="LCO Book" title="LCO Book" /></div>',
		'price' => '10.00 €'
	),
	'km0di000' => array(
		'name' => 'LCO CD',
		'description' => 'LCO 2009-2000 Interactive CD',
		'image' => '<div class="imProductListImage"><img src="cart/images/no-preview.gif" alt="LCO CD" title="LCO CD" /></div>',
		'price' => '50.00 €'
	),
	'om0di000' => array(
		'name' => 'JCH CD',
		'description' => 'JCH 2009-2003 Interactive CD',
		'image' => '<div class="imProductListImage"><img src="cart/images/no-preview.gif" alt="JCH CD" title="JCH CD" /></div>',
		'price' => '50.00 €'
	),
	'vo0di000' => array(
		'name' => 'JCO CD',
		'description' => 'JCO 2009-2003 Interactive CD',
		'image' => '<div class="imProductListImage"><img src="cart/images/no-preview.gif" alt="JCO CD" title="JCO CD" /></div>',
		'price' => '50.00 €'
	)
);

/*****************
	IMAGES SEARCH
*****************/
$imSettings['search']['images'] = array(
);

/*****************
	VIDEOS SEARCH
*****************/
$imSettings['search']['videos'] = array(
);

// End of file search.inc.php