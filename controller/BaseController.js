sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
		"sap/ui/core/routing/History"
], function(Controller,JSONModel, History) {
	"use strict";

	return Controller.extend("TransferOrder.controller.BaseController", {
onInit:function(){
	
}, 
getRouter:  function () {
		return sap.ui.core.UIComponent.getRouterFor(this);
		
		},	
		onNavBack: function() {

			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			if (typeof(sPreviousHash) !== "undefined") {
				if (this.getView().getModel("SuccessModel").oData.tunam !== "" && typeof(this.getView().getModel("SuccessModel").oData.tunam) !== "undefined") {
					var oRouter = this.getRouter();
					oRouter.navTo("overview", {}, true);
					this.getView().getModel("SuccessModel").oData.tunam ="";
				} else {
					window.history.go(-1);
				}

			} else {
				window.open(window.location.href.split("#")[0], "_self");
			}
		}
	});
});