duckAlerts
==========

A light weight alternative to native browser alerts.

Prerequisites
====
Jquery is a prerequisite for this library to work. If not loaded correctly you will see an error on the error console.

Usage
======
There are 2 different functions that can be triggered on any desired time via javascript.

raiseDuckAlert - raises an alert, this alert has text and an okay button. You can add a callback to the okay button.

raiseDuckDialog - raises a dialog box, with some text and a "Yes" and "No" button. A callback can be attached to either button

Syntax
===

raiseDuckAlert(
	Alert text,
	Alert type,
	Intrusive,
	OK Callback
);

raiseDuckDialog(
	Alert text,
	Alert type,
	Intrusive,
	Yes callback,
	No callback,
);

Options
===

**Alert type**

Alert types can be of the following type: 'info','error','success','dialog', 'warning'. If the type of alert is found not to be within this list an error will be raised in the console and the alert type will be defaulted to 'info'.

All types can be used with either function, as of now it only ads a class to the alert container, which can be edited in your own custom css file,  each style added is duck-style-class-<Alert type>.

**Intrusive**

Setting the intrusive argument to true, a div will block the entire webpage, making the webpage unaccessible, if set to false the user will still be able to interact with the webpage even though the alert is active.


Up-coming
===

1. Custom text on buttons in dialog
2. Multiple styling options
3. Time based dismisal of alerts



