sap.ui.define([
	"TransferOrder/controller/BaseController",
	"sap/ui/core/routing/History"
], function(BaseController,History) {
	"use strict";

	return BaseController.extend("TransferOrder.controller.TransferOrder", {

onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			}
			else {
		var router =	sap.ui.core.UIComponent.getRouterFor(this); 
                                router.navTo("overview", null, true);
			
			}
		}

		
	
	});
});