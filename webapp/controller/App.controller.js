sap.ui.define([
	'sap/ui/core/mvc/Controller',
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("logaligroup.Customers.controller.App", {

		onInit: function () {

		},

		onOpenHeader: function () {
			this.getOwnerComponent().openHelloDialog();
		}
	});
});