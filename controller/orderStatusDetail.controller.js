sap.ui.define([
	"TransferOrder/controller/BaseController",
	"sap/ui/core/routing/History"
], function(BaseController) {
	"use strict";

	return BaseController.extend("TransferOrder.controller.orderStatusDetail", {
	
		onPressCreate:function(){
			var router =	sap.ui.core.UIComponent.getRouterFor(this); 
                                router.navTo("overview", null);
		}
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ReplishmentOrder.view.orderStatusDetail
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ReplishmentOrder.view.orderStatusDetail
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ReplishmentOrder.view.orderStatusDetail
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ReplishmentOrder.view.orderStatusDetail
		 */
		//	onExit: function() {
		//
		//	}

	});

});