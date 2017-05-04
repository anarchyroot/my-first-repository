<?php

include ("../res/x5engine.php");

/************
	CART SETTINGS
************/

$imSettings['cart'] = array(
	'force_sender' => false,
	'email_opening' => 'Dear Customer,<br /><br />Thank you for your purchase. Here you can find a Order\'s summary.<br /><br />Below you can find the list of the ordered products, the billing information and the instructions about the shipping and the payment you have chosen.',
	'email_closing' => 'Please contact us if you need further information.<br /><br />Best Regards, Sales Staff.',
	'useCSV' => false,
	'header_bg_color' => '#C0C0C0',
	'header_text_color' => '#000000',
	'cell_bg_color' => 'transparent',
	'cell_text_color' => '#000000',
	'border_color' => '#808080',
	'owner_email' => 'horstpunzet@mathsplus.ie'
);

if (count($_POST) > 0) {
	$email = new imSendEmail();
	$email->sendCartEmail($_POST);
} else if ($_GET['action'] == 'currency') {
	echo imCurrency($_GET['amount'], $_GET['from'], $_GET['to']);
} else if ($_GET['action'] == 'vat') {
	echo imValidateVAT($_GET['vat'], $_GET['country']);
}

// End of file x5cart.php