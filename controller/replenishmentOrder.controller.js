sap.ui.define([
	"TransferOrder/controller/BaseController",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"TransferOrder/model/Input",
	"TransferOrder/model/Cemera"

], function(BaseController,Filter,FilterOperator, Input,Cemera) {
	"use strict";

	return BaseController.extend("TransferOrder.controller.replenishmentOrder", {
	onInit:function(){
		var oController = this;

			var oRouter = oController.getRouter();
			oRouter.getRoute("replenishmentOrder").attachPatternMatched(this._onObjectMatched, this);
	},	
	
		_onObjectMatched: function() {
			var oController = this;
			Input.fninputFocus(oController);
		},
		onAfterRendering: function() {
			var oController = this;
			$('.infoVboxClass').on("tap",function() {

				oController.navToStorageLoc();
			});

		},
		navToStorageLoc: function() {
			var router = sap.ui.core.UIComponent.getRouterFor(this);
			router.navTo("storageLoc", null);
		},

		onSelectEvent: function(SSCC) {
			// var filters =[];
		
			 //filters = [
				// 	new sap.ui.model.Filter([
				// 			new Filter("Lenum", FilterOperator.EQ, evt)
				// 		], false)
				// ];
				// this.getView().getModel("oDataModel").read("/SsccDetailSet?$filter=( Lenum eq '"+evt+"')");
 
			var router = sap.ui.core.UIComponent.getRouterFor(this);
			router.navTo("orderDetails",  {
				SSCC: SSCC
			});
			
		},
		onPressEdit: function() {
			this.navToStorageLoc();
		},
		fnCameraScan: function() {
			var oController=this, key="replenishment";
			Cemera.fnCameraScan(oController,key);
		},
		inputLiveChange:function(){
			var oController=this, key="replenishment";
			Input.inputLiveChange(oController,key);
				
			}

	});
});