sap.ui.define([
	"sap/ui/core/Control",
	"sap/m/RatingIndicator",
	"sap/m/Label",
	"sap/m/Button"
], function (Control, RatingIndicator, Label, Button) {
	return Control.extend("logaligroup.Customers.control.CustomerRating", {

		metadata: {
			properties: {
				value: {
					type: "float",
					defaultValue: 0
				}
			},

			aggregations: {
				_rating: {
					type: "sap.m.RatingIndicator",
					multiple: false,
					visibility: "hidden"
				},
				_label: {
					type: "sap.m.Label",
					multiple: false,
					visibility: "hidden"
				},
				_button: {
					type: "sap.m.Button",
					multiple: false,
					visibility: "hidden"
				}
			},

			events: {
				change: {
					parameters: {
						value: {
							type: "int"
						}
					}
				}
			}
		},

		init: function () {

		},

		render: function (oRm, oControl) {

		}

	});
});