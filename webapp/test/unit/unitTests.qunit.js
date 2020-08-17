/* Global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {

	sap.ui.require([
		"logaligroup/Customers/test/unit/model/formatter"
	], function () {
		QUnit.start();
	});
});