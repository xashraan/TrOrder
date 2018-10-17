sap.ui.define([
	"TransferOrder/controller/BaseController",
	'sap/m/MessageBox',
	"sap/ui/model/json/JSONModel",
	"TransferOrder/model/Barcode",
	"TransferOrder/model/Input",
	"TransferOrder/model/Cemera",
	"sap/ui/core/routing/History"
], function(BaseController, MessageBox, JSONModel, Barcode, Input, Cemera, History) {
	"use strict";

	return BaseController.extend("TransferOrder.controller.ScanArtical", {
		onInit: function() {
			var oController = this;

			var oRouter = oController.getRouter();
			oRouter.getRoute("overview").attachPatternMatched(this._onObjectMatched, this);
			// detaching backbutton for standared function
			sap.ui.getCore().byId("backBtn").detachPress(sap.ui.getCore().byId("backBtn").mEventRegistry.press[0].fFunction);
			sap.ui.getCore().byId("backBtn").attachPress(function(event) {
				event.preventDefault();
				oController.onNavBack();
			});
		},

		_onObjectMatched: function() {
			var oController = this;
			var oHistory = History.getInstance();
			oHistory._reset();
			Input.fninputFocus(oController);
		},
		onAfterRendering: function() {
			var oController = this;
			$('.footerVBoxClass').click(function() {

				oController.onPresstarget();
			});
			$('.footerSecVBoxClass').click(function() {

				oController.onPresssearchOrder();
			});
			$('.footerLastVBoxClass').click(function() {

				oController.onPressMoveProduct();
			});

		},
		_getDialog: function() {
			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment("ReplishmentOrder.fragment.eventType", this);
				this.getView().addDependent(this._oDialog);
			}
			return this._oDialog;
		},
		/*	on live change of input should be called*/
		onEventPress: function(oEvent) {
			var router = sap.ui.core.UIComponent.getRouterFor(this);
			router.navTo("ListView", {
				SSCC: oEvent
			});

		},
		onclose: function() {
			this._getDialog().close();
		},

		onPresstarget: function() {
			// var Model = this.getView().getModel("FlagModel");
			// Model.oData.flag = "";
			// Model.refresh();
			this.navTo("targetInformation");

		},
		onPresssearchOrder: function() {
			// var Model = this.getView().getModel("FlagModel");
			// Model.oData.flag = "X";
			// Model.refresh();
			this.navTo("searchOrder");

		},
		onPressMoveProduct: function() {
			this.navTo("moveProduct");
		},
		navTo: function(target) {
			var router = sap.ui.core.UIComponent.getRouterFor(this);
			router.navTo(target, null);
		},
		/*	Author : chaitanya
		Data : 17/09/2018
		Purpose : Getting Camerea Scanned Value
	*/
		fnCameraScan: function() {
			var oController = this,
				key = "ScanAritical";
			Cemera.fnCameraScan(oController, key);
		},
		inputLiveChange: function() {
			var oController = this,
				key = "ScanAritical";
			Input.inputLiveChange(oController, key);

		}

	});
});