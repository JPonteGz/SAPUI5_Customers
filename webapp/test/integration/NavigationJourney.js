sap.ui.define([
	"logaligroup/Customers/localService/mockserver",
	"sap/ui/test/opaQunit",
	"./pages/App"
], function (mockserver) {
	QUnit.module("Navigation");

	opaTest("Should open the Hello Dialog", function (Given, When, Then) {
		//initialize the mock server
		mockserver.init();

		//Arrangements
		Given.iStartMyUIComponent({
			componentConfig: {
				name: "logaligroup.Customers"
			}
		});

		//Actions
		When.onTheAppPage.iSayHelloDialogButton();

		//Assertions
		Then.onTheAppPage.iSeeTheHelloDialog();

		//Cleanup
		Then.iTeardownMyApp();
	});
});