sap.ui.define([
	"logaligroup/Customers/model/formatter",
	"sap/ui/model/resource/ResourceModel"
], function (formatter, ResourceModel) {

	QUnit.module("Formatting functions", {

		beforeEach: function () {
			this._oResourceModel = new ResourceModel({
				bundleUrl: sap.ui.require.toUrl("logaligroup/Customers") + "/i18n/i18n.properties"
			});
		},

		afterEach: function () {
			this._oResourceModel.destroy();
		}

	});

	QUnit.test("Should return the translated text", function (assert) {

		var oModel = this.stub();
		oModel.withArgs("i18n").returns(this._oResourceModel);

		var oViewStub = {
			getModel: oModel
		};

		var oControllerStub = {
			getView: this.stub().returns(oViewStub)
		};

		var fnIsolatedFormatter = formatter.statusText.bind(oControllerStub);

		// Assert
		assert.strictEqual(fnIsolatedFormatter("S"), "Sales Representative", "The long text for status S is correct");
		assert.strictEqual(fnIsolatedFormatter("O"), "Owner", "The long text for status O is correct");
		assert.strictEqual(fnIsolatedFormatter("A"), "Order Administrator", "The long text for status A is correct");

	});
});