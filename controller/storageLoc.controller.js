sap.ui.define([
	"TransferOrder/controller/BaseController",
	"TransferOrder/formatter/formatter",
	"TransferOrder/model/Input",
	"sap/ui/core/routing/History"
], function(BaseController, Formatter, Input, History) {
	"use strict";

	return BaseController.extend("TransferOrder.controller.storageLoc", {
		onInit: function() {
			var oController = this;

			var oRouter = oController.getRouter();
			oRouter.getRoute("storageLoc").attachPatternMatched(this._onObjectMatched, this);
		},

		_onObjectMatched: function() {
			var oController = this;
			$("#numBox1").text("");
		},
		onAfterRendering: function() {
			/*$('.numBox').click(function() {
    $('.keypad').fadeToggle('fast');
    event.stopPropagation();
  });*/
			var oController = this;
			parent.addClasstoolbar = oController.getView().getContent()[0].getAggregation('pages')[0].getAggregation('footer').getId();

			$('.keypadToolbar').on("tap", function() {
				$("#" + parent.addClasstoolbar).addClass("toolbarSelectedClass");
				oController.onPressContinue();
			});
			$('.key').on("tap", function() {
				$('.ssccNumbox').text($(".ssccNumbox").text() + this.innerHTML);

			});

			$('.btn').on("tap", function() {
				if (this.innerHTML == '_') {
					if ($(".ssccNumbox").text().length > 0) {
						$('.ssccNumbox').text($(".ssccNumbox").text() + " ");

					}
				} else {

					var barcodeString = $(".ssccNumbox").text();
					$(".ssccNumbox").text(barcodeString.slice(0, barcodeString.length - 1));

				}

				var timeout;
				var lastTap = 0;
				var elm1 = this.getVie().byId('numericInput1');
				elm1.addEventListener('touchend', function(event) {
					var currentTime = new Date().getTime();
					var tapLength = currentTime - lastTap;
					clearTimeout(timeout);
					if (tapLength < 500 && tapLength > 0) {

						event.preventDefault();
					} else {

						timeout = setTimeout(function() {

							clearTimeout(timeout);
						}, 500);
					}
					lastTap = currentTime;
				});

				// event.stopPropagation();
			});

		},

		_getDialog: function() {
			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment("TransferOrder.fragment.eventType", this);
				this.getView().addDependent(this._oDialog);
			}
			return this._oDialog;
		},
		onPressContinue: function() {
			var router = sap.ui.core.UIComponent.getRouterFor(this);
			router.navTo("orderDetails", null, true);
			$("#" + parent.addClasstoolbar).removeClass("toolbarSelectedClass");
		},
		onclose: function() {
			this._getDialog().close();
		},
		onSelectEvent: function(evt) {
			var router = sap.ui.core.UIComponent.getRouterFor(this);
			router.navTo("orderDetails", null, true);

		},
		onNavBack: function() {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var router = sap.ui.core.UIComponent.getRouterFor(this);
				router.navTo("overview", null, true);

			}
		}

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ReplishmentOrder.view.storageLoc
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ReplishmentOrder.view.storageLoc
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ReplishmentOrder.view.storageLoc
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ReplishmentOrder.view.storageLoc
		 */
		//	onExit: function() {
		//
		//	}

	});

});