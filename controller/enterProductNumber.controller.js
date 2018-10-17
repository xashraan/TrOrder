sap.ui.define([
	"TransferOrder/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("TransferOrder.controller.enterProductNumber", {
		onAfterRendering: function() {

			var oController = this;
			parent.addClasstoolbar = oController.getView().getContent()[0].getAggregation('pages')[0].getAggregation('footer').getId();

			$('.enterProductToolbar').on("tap", function() {
				$("#" + parent.addClasstoolbar).addClass("toolbarSelectedClass");
				oController.onPressContinue();
			});
			$('.key').on("tap", function() {
				var numBox = document.getElementsByClassName('numBox');
				if (this.innerHTML == '0') {
					if ($(".numBox").text().length > 0) {
						$('.numBox').text($(".numBox").text() + this.innerHTML);
					}
				} else {
					//numBox.innerHTML = numBox.innerHTML + this.innerHTML;
					$('.numBox').text($(".numBox").text() + this.innerHTML);
				}

			});

			$('.btn').on("tap", function() {
				if (this.innerHTML == '-') {
					var numBox = document.getElementsByClassName('numBox');
					if ($(".numBox").text().length > 0) {
						$('.numBox').text($(".numBox").text() + " ");
					}
				} else {

					$(".numBox").text('');

				}

			});

		},
		onPressContinue: function() {
				var router = sap.ui.core.UIComponent.getRouterFor(this);
				router.navTo("amountMoveProduct", null, true);
			}
			/**
			 * Called when a controller is instantiated and its View controls (if available) are already created.
			 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
			 * @memberOf TransferOrder.view.enterProductNumber
			 */
			//	onInit: function() {
			//
			//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf TransferOrder.view.enterProductNumber
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf TransferOrder.view.enterProductNumber
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf TransferOrder.view.enterProductNumber
		 */
		//	onExit: function() {
		//
		//	}

	});

});