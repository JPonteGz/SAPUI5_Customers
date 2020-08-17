sap.ui.define([], function () {

	return {
		statusText: function (sStatus) {
			var resourceBundle = this.getView().getModel("i18n").getResourceBundle();

			switch (sStatus) {
			case "S":
				return resourceBundle.getText("customerStatusS");
			case "O":
				return resourceBundle.getText("customerStatusO");
			case "A":
				return resourceBundle.getText("customerStatusA");
			default:
				return sStatus;
			}
		}
	};
});