sap.ui.define([
	"TransferOrder/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("TransferOrder.controller.orderError", {


onPressCreate:function(){
			var router =	sap.ui.core.UIComponent.getRouterFor(this); 
                                router.navTo("overview", null);
		}
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf TransferOrder.view.orderError
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf TransferOrder.view.orderError
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf TransferOrder.view.orderError
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf TransferOrder.view.orderError
		 */
		//	onExit: function() {
		//
		//	}

	});

});