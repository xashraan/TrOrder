sap.ui.define([
	"TransferOrder/controller/BaseController",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
		"TransferOrder/model/Input",
		'sap/m/MessageBox'
], function(BaseController,Filter,FilterOperator,Input,MessageBox) {
	"use strict";

	return BaseController.extend("TransferOrder.controller.searchBrand", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf TransferOrder.view.searchBrand
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf TransferOrder.view.searchBrand
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf TransferOrder.view.searchBrand
		 */
		 onInit:function(){
	var oController = this;
	var oRouter = oController.getRouter();
			oRouter.getRoute("searchBrand").attachPatternMatched(this._onObjectMatched, this);
},

	_onObjectMatched: function() {
		var oController = this;
			if(	this.searchOrder ==="X"){
			oController.getView().byId("searchBrandHLabel").setVisible(true);
				oController.getView().byId("brandText").setText("Tuotenimi");
			}else{
			oController.getView().byId("searchBrandHLabel").setVisible(false);	
			oController.getView().byId("brandText").setText("Hae tuotenimellä");
			}
	
		},
	onAfterRendering: function() {
			var oController = this;
			$('.keypadToolbar').on("tap",function() {
			
			oController.onPresstarget();	
			});
			},
			onPresstarget:function(){
					var router = sap.ui.core.UIComponent.getRouterFor(this);
				var getStorageBin = $(".numBox").text();
					var SearchOrderModel = this.getView().getModel("SearchOrderModel");
			if(	this.searchOrder ==="X"){
			SearchOrderModel.getData().ProductName = getStorageBin;
			router.navTo("searchOrder", null);	
			this.searchOrder ="";
			}else{
		SearchOrderModel.getData().ProductName = getStorageBin;
			router.navTo("amountMoveProduct", null);	
			}
			},
			onSearchBrand:function(oEvent){
				var oController=this ;
				var value = oEvent.getParameter("suggestValue");
				var filters = [];
				if(value.length > 3){
					
				//	oController.getView().byId("searchField").setEnableSuggestions(true);
			// var url = "/sap/opu/odata/sap/ZFIORI_WM_TRANSFER_ORDER_SRV/";
			// var oDataModel = new sap.ui.model.odata.ODataModel(url);
			//call of success method
			var fnSuccess=function(oData){
		// 		var newSearch = new sap.ui.model.json.JSONModel(oData.results);
		// 		newSearch.setSizeLimit(oData.results.length);
		// 		oController.getView().setModel(newSearch, "SearchModel");
		// 	oController.getView().getModel("SearchModel").refresh(true);
		// oController.byId("searchField").suggest();
			};
			var fnError=function(oError){
				oController.fnerrormessage(oController);
					
			}; 
			//Gateway Service to Get the list of EventType
			
			filters = [
					new sap.ui.model.Filter([
							new Filter("Maktx", FilterOperator.EQ, value)
						], false)
				];
			// oDataModel.read("BrandNameSet?$filter=( Maktx eq '"+Query+"') ", null, null,true,fnSuccess,fnError);
		oController.getView().byId("searchField").setEnableSuggestions(true);
			oController.getView().byId("searchField").getBinding("suggestionItems").attachEventOnce('dataReceived', function() {

   // now activate suggestion popup

   //oEvent.getSource().suggest();
   oController.getView().byId("searchField").suggest();

  }); 
				oController.getView().byId("searchField").getBinding("suggestionItems").filter(filters);
		//	oController.getView().byId("searchField").suggest();
			   
      }
				
			},
			fnerrormessage: function(oController){
	var errorMessageText = oController.getView().getModel("i18n").getResourceBundle().getText("invalidSearchdValue");
				MessageBox.error(
					errorMessageText, {
						onClose: function(sButton) {
							if (sButton === sap.m.MessageBox.Action.CLOSE) {
								oController.getView().byId("searchField").SetValue("");
							}
						}

					});
}

	});

});