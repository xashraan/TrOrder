sap.ui.define([
		"TransferOrder/controller/BaseController",
		"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/routing/History"
], function(BaseController,Filter,FilterOperator,JSONModel,History) {
	"use strict";

	return BaseController.extend("TransferOrder.controller.orderDetails", {
	
		onInit:function(){
		var oController = this;

			var oRouter = oController.getRouter();
			oRouter.getRoute("orderDetails").attachPatternMatched(this._onObjectMatched, this);
	},	
	
		_onObjectMatched: function(oEvent) {
			var oController = this;
			var SSccValue = oEvent.getParameter('arguments').SSCC;
			
			var url = "/sap/opu/odata/sap/ZFIORI_WM_TRANSFER_ORDER_SRV/";
			var oDataModel = new sap.ui.model.odata.ODataModel(url);
			//call of success method
			var fnSuccess=function(oData){
					
				var oSSCC=oData.results[0];
				var DetailsJson = new JSONModel(oSSCC);
			
				
				oController.getView().setModel(DetailsJson, "orderListItem");
				oController.getView().getModel("orderListItem").refresh();
			
		/*	var oModelForSSCC = new sap.ui.model.json.JSONModel();
				oModelForSSCC.setData(oData.results[0]);
				oController.getView().setModel(oModelForSSCC,"orderListItem");*/
		
			};
			var fnError=function(oError){
					console.log(oError);
					//oController.fnerrormessage(oController);
					
			}; 
			//Gateway Service to Get the list of EventType
			oDataModel.read("SsccDetailSet?$filter=( Lenum eq '"+SSccValue+"') ", null, null,true,fnSuccess,fnError);
			// oController.getView().getModel("oDataModel").read("/SsccDetailSet?$filter=( Lenum eq '"+SSccValue+"')");
		},
		
		
		onAccept:function(){
			var oController=this;
			var oView=this.getView();
			var url = "/sap/opu/odata/sap/ZFIORI_WM_TRANSFER_ORDER_SRV/";
			var oDataModel = new sap.ui.model.odata.ODataModel(url);
			var router = sap.ui.core.UIComponent.getRouterFor(oController);
			var SSCCdetails =oView.getModel("orderListItem").getData();
			var fnSuccess=function(oData){
				parent.Tanum=oData.Tanum;
				parent.CreatedTime=oData.CreatedTime;
        		router.navTo("orderStatusDetail", null);	
			};
			var fnError=function(oError){
				parent.errorFlag = "statusError";
        		router.navTo("orderError", null);	
			};
			//Set the Replenishment Order Post data
			var oRepOrder={
			  "LENUM": SSCCdetails.Lenum,
			  "BWLVS": SSCCdetails.Lgnum,
			  "SQUIT": "X"
			};
		
			if(SSCCdetails.Exist==="true"){
				//	parent.Exist = "X";
					router.navTo("orderExist", null);	
			}else{
					//Post Replenishment Order
				oDataModel.create("TransferOrderSet", oRepOrder, null, fnSuccess, fnError);
			}
		},
		onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			}else{
				var router =	sap.ui.core.UIComponent.getRouterFor(this); 
                router.navTo("overview", null, true);
			}
		}
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ReplishmentOrder.view.orderDetails
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ReplishmentOrder.view.orderDetails
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ReplishmentOrder.view.orderDetails
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ReplishmentOrder.view.orderDetails
		 */
		//	onExit: function() {
		//
		//	}

	});

});