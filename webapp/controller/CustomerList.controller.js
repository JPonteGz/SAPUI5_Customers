sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"../model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, JSONModel, formatter, Filter, FilterOperator) {

	return Controller.extend("logaligroup.Customers.controller.CustomerList", {
		
		formatter: formatter,
		
		onInit: function(){
			var oViewModel = new JSONModel({
				currency: "USD"
			});
			this.getView().setModel(oViewModel, "view");
		},
		
		onFilterCustomers: function (oEvent) {
			
			var aFilter = [];
			var sQuery = oEvent.getParameter("query"); 
			if (sQuery) {
				aFilter.push(new Filter("ContactName", FilterOperator.Contains, sQuery));
			}
			
			//Filter binding
			var oList = this.byId("customerList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		},
		
		onPress: function(oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detail", {
				customerPath: window.encodeURIComponent(oItem.getBindingContext("customerWz").getPath().substr(1))
			});
		}
	});
});