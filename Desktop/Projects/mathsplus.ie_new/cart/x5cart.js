// General Cart Settings
x5engine.imCart.settings.vat = 0;
x5engine.imCart.settings.vatincluded = true;
x5engine.imCart.settings.currency = '€';
x5engine.imCart.settings.currency_id = 'EUR';
x5engine.imCart.settings.currency_format = '#,###.@@[C]';
x5engine.imCart.settings.post_url = 'x5cart.php';
x5engine.imCart.settings.order_no_format = '[yy][mm][dd]-[A-Z][A-Z][0-9][0-9]';
x5engine.imCart.settings.form_autocomplete = true;
x5engine.imCart.settings.form_validation = 'tip';
x5engine.imCart.settings.remove_from_cart_icon = 'cart/images/cart-remove.gif';
x5engine.imCart.settings.add_to_cart_icon = 'cart/images/cart-add.gif';
x5engine.imCart.settings.minimum_amount = 0;
x5engine.imCart.settings.currencies = [{ "value": "ALL", "text": "Albania, Leke, Lek" }, { "value": "USD", "text": "United States of America, Dollars, $" }, { "value": "AFN", "text": "Afghanistan, Afghanis, ؋" }, { "value": "ARS", "text": "Argentina, Pesos, $" }, { "value": "AUD", "text": "Australia, Dollars, $" }, { "value": "BGN", "text": "Bulgarian, Lev, лв" }, { "value": "BRL", "text": "Brazil, Reais, R$" }, { "value": "GBP", "text": "United Kingdom, Pounds, £" }, { "value": "BND", "text": "Brunei Darussalam, Dollars, $" }, { "value": "CAD", "text": "Canada, Dollars, $" }, { "value": "CNY", "text": "China, Yuan Renminbi, ¥" }, { "value": "HRK", "text": "Croatia, Kuna, ₡" }, { "value": "CZK", "text": "Czech Republic, Koruny, Kč" }, { "value": "DKK", "text": "Denmark, Kroner, kr" }, { "value": "EGP", "text": "Egypt, Pounds, £" }, { "value": "EUR", "text": "Euro, €" }, { "value": "GTQ", "text": "Guatemala, Quetzales, Q" }, { "value": "HKD", "text": "Hong Kong, Dollars, $" }, { "value": "HUF", "text": "Hungary, Forint, Ft" }, { "value": "ISK", "text": "Iceland, Kronur, kr" }, { "value": "INR", "text": "India, Rupees, Rs" }, { "value": "IDR", "text": "Indonesia, Rupiahs, Rp" }, { "value": "IRR", "text": "Iran, Rials, ﷼" }, { "value": "ILS", "text": "Israel, New Shekels, ₪" }, { "value": "JPY", "text": "Japan, Yen, ¥" }, { "value": "KZT", "text": "Kazakhstan, Tenge, лв" }, { "value": "KPW", "text": "Korea (North), Won, ₩" }, { "value": "KRW", "text": "Korea (South), Won, ₩" }, { "value": "LVL", "text": "Latvia, Lati, Ls" }, { "value": "LTL", "text": "Lithuania, Litai, Lt" }, { "value": "MYR", "text": "Malaysia, Ringgits, RM" }, { "value": "MXN", "text": "Mexico, Pesos, $" }, { "value": "NZD", "text": "New Zealand, Dollars, $" }, { "value": "NOK", "text": "Norway, Kroner, kr" }, { "value": "OMR", "text": "Oman, Rials, ﷼" }, { "value": "PLN", "text": "Poland, Zlotych, zł" }, { "value": "QAR", "text": "Qatar, Rials, ﷼" }, { "value": "RON", "text": "Romania, New Lei, lei" }, { "value": "RUB", "text": "Russia, Rubles, руб" }, { "value": "SAR", "text": "Saudi Arabia, Riyals, ﷼" }, { "value": "RSD", "text": "Serbia, Dinars, Дин." }, { "value": "SGD", "text": "Singapore, Dollars, $" }, { "value": "ZAR", "text": "South Africa, Rand, R" }, { "value": "SEK", "text": "Sweden, Kronor, kr" }, { "value": "CHF", "text": "Switzerland, Francs, CHF" }, { "value": "TWD", "text": "Taiwan, New Dollars, NT$" }, { "value": "THB", "text": "Thailand, Baht, ฿" }, { "value": "TTD", "text": "Trinidad and Tobago, Dollars, TT$" }, { "value": "TRL", "text": "Turkey, Lira, £" }, { "value": "UAH", "text": "Ukraine, Hryvnia, ₴" }];

// Cart Products
x5engine.imCart.products = {
	'nb0di000': {
		'id': 'nb0di000',
		'id_user': 'LCO Book',
		'name': 'LCO Book',
		'category': 'di0abcde',
		'description': 'LCO 2009-2002 Revision Book',
		'price': 10.00,
		'discounts': {},
		'images': [],
		'vat': 0,
		'weight': 0.00000
	},
	'km0di000': {
		'id': 'km0di000',
		'id_user': 'LCO CD',
		'name': 'LCO CD',
		'category': 'di0abcde',
		'description': 'LCO 2009-2000 Interactive CD',
		'price': 50.00,
		'discounts': {},
		'images': [],
		'vat': 0,
		'weight': 0.00000
	},
	'om0di000': {
		'id': 'om0di000',
		'id_user': 'JCH CD',
		'name': 'JCH CD',
		'category': 'di0abcde',
		'description': 'JCH 2009-2003 Interactive CD',
		'price': 50.00,
		'discounts': {},
		'images': [],
		'vat': 0,
		'weight': 0.00000
	},
	'vo0di000': {
		'id': 'vo0di000',
		'id_user': 'JCO CD',
		'name': 'JCO CD',
		'category': 'di0abcde',
		'description': 'JCO 2009-2003 Interactive CD',
		'price': 50.00,
		'discounts': {},
		'images': [],
		'vat': 0,
		'weight': 0.00000
	}
};

// Shipping Data
x5engine.imCart.shippings = [
	{
		'name': 'Postage and handling',
		'description': '',
		'vat': 0,
		'type': 'FIXED',
		'price': 3.00000,
		'email': ''
	}
];

// Payment Data
x5engine.imCart.payments = [
	{
		'name': 'PayPal/Credit Card',
		'description': '',
		'email': '',
		'html': '<a target="_blank" href="https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&bn=IT_ICM-WPS&business=horstpunzet%40hotmail.com&item_name=Order%20number%20[EX_ORDER_NO]&item_number=[EX_ORDER_NO]&amount=[EX_PRICE, 1, ###.@@]&currency_code=EUR&button_subtype=services&no_note=0&charset=UTF%2d8&first_name=[EX_FIRST_NAME]&last_name=[EX_LAST_NAME]&address1=[EX_ADDRESS1]&address2=[EX_ADDRESS2]&city=[EX_CITY]&state=[EX_STATE]&zip=[EX_ZIP]&email=[EX_EMAIL]&no_shipping=1&return=http%3A%2F%2Fmathsplus.ie%2F&cancel_return=http%3A%2F%2Fmathsplus.ie%2F">\n<img src="https://www.paypal.com/en_GB/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">\n</a><img alt="" border="0" src="https://www.paypal.com/en_GB/i/scr/pixel.gif" width="1" height="1">',
		'vat': 0,
		'price': 0.000
	}
];

// HTML Form
x5engine.imCart.html_form = '<div style="text-align: center; font-weight: bold;">Invoice Address/Shipping address</div><br /><div class="imCartFormRow"><span style="width: 100%; margin: 0 auto; display: block;"><label  class="imCartLabel" for="imCartName"><span>First Name:</span></label><input type="text" name="imCartName" id="imCartName" class="imCartInput mandatory ">*</span></div><div class="imCartFormRow"><span style="width: 100%; margin: 0 auto; display: block;"><label  class="imCartLabel" for="imCartLastName"><span>Last name:</span></label><input type="text" name="imCartLastName" id="imCartLastName" class="imCartInput mandatory ">*</span></div><div class="imCartFormRow"><span style="width: 100%; margin: 0 auto; display: block;"><label  class="imCartLabel" for="imCartAddress1"><span>Address:</span></label><input type="text" name="imCartAddress1" id="imCartAddress1" class="imCartInput mandatory ">*</span></div><div class="imCartFormRow"><span style="width: 100%; margin: 0 auto; display: block;"><label  class="imCartLabel" for="imCartAddress2"><span>Additional address information:</span></label><input type="text" name="imCartAddress2" id="imCartAddress2" class="imCartInput mandatory ">*</span></div><div class="imCartFormRow"><span style="width: 100%; margin: 0 auto; display: block;"><label  class="imCartLabel" for="imCartCity"><span>City:</span></label><input type="text" name="imCartCity" id="imCartCity" class="imCartInput mandatory ">*</span></div><div class="imCartFormRow"><span style="width: 100%; margin: 0 auto; display: block;"><label  class="imCartLabel" for="imCartStateRegion"><span>State/Province:</span></label><input type="text" name="imCartStateRegion" id="imCartStateRegion" class="imCartInput mandatory ">*</span></div><div class="imCartFormRow"><span style="width: 100%; margin: 0 auto; display: block;"><label  class="imCartLabel" for="imCartPhone"><span>Telephone:</span></label><input type="text" name="imCartPhone" id="imCartPhone" class="imCartInput mandatory valGenTelephone">*</span></div><div class="imCartFormRow"><span style="width: 100%; margin: 0 auto; display: block;"><label  class="imCartLabel" for="imCartEmail"><span>Email address:</span></label><input type="text" name="imCartEmail" id="imCartEmail" class="imCartInput mandatory valEmail">*</span></div>';

// End of file x5cart.js