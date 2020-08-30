sap.ui.define([
	"sap/ui/base/ManagedObject",
	"sap/ui/core/Fragment",
	"sap/ui/core/syncStyleClass"
], function (ManageObject, Fragment, syncStyleClass) {

	return ManageObject.extend("logaligroup.Customers.controller.HelloDialog", {

		constructor: function (oView) {
			this._oView = oView;
		},

		exit: function () {
			delete this._oView;
		},

		open: function () {

			var oView = this._oView; // this.getView();

			if (!oView.byId("helloDialog")) {

				var oFramentController = {
					
					onCloseDialog: function () {
						oView.byId("helloDialog").close();
					}
					
				};

				Fragment.load({
					id: oView.getId(),
					name: "logaligroup.Customers.view.HelloDialog",
					controller: oFramentController // Indicar el controlador de fragment(antes era this)
				}).then(function (oDialog) {
					oView.addDependent(oDialog);
					syncStyleClass(oView.getController().getOwnerComponent().getContentDensityClass(), oView, oDialog);
					oDialog.open();
				});
			} else {
				oView.byId("helloDialog").open();
			}
		}
	});
});