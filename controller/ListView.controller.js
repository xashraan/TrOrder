sap.ui.define([
	"TransferOrder/controller/BaseController",
	'sap/m/MessageBox',
	"TransferOrder/model/Barcode",
	"TransferOrder/model/Input",
		"TransferOrder/model/Cemera"
], function(BaseController,MessageBox,Barcode,Input,Cemera) {
	"use strict";

	return BaseController.extend("TransferOrder.controller.ListView", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf TransferOrder.view.ListView
		 */
			onInit: function() {
				var oController=this ;
				parent.selectVisibleFlag = "";
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.getRoute("ListView").attachPatternMatched(this._onObjectMatched, this);
	 			var oModelForSSCC = new sap.ui.model.json.JSONModel();
				oModelForSSCC.setData([]);
				oController.getView().setModel(oModelForSSCC,"orderListItem");
			},
			_onObjectMatched: function (oEvent) {
				var oController=this;
				Input.fninputFocus(oController);
				var SSccValue = oEvent.getParameter('arguments').SSCC;
				oController.fnGetSSccDetails(SSccValue);
					//oController._getDialog().open();
			},
				_getDialog : function () {
			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment("TransferOrder.fragment.ssccScannedList", this);
				this.getView().addDependent(this._oDialog);
			}
			return this._oDialog;
		},
	/*	getting the SSCC details after scanning*/
	fnGetSSccDetails:function(SSCCVal){
			var oController=this ;
			var url = "/sap/opu/odata/sap/ZFIORI_WM_TRANSFER_ORDER_SRV/";
			var oDataModel = new sap.ui.model.odata.ODataModel(url);
			//call of success method
			var fnSuccess=function(oData){
				var oSSCC=oData.results[0];
				var aResult=[];
				aResult=oController.getView().getModel("orderListItem").getData();
				aResult.unshift(oSSCC);
				oController.getView().getModel("orderListItem").setData(aResult);
				if(oController.getView().getModel("orderListItem").getData().length !== 0){
oController.getView().byId("orderList").setVisible(true);      	
}else{
	oController.getView().byId("orderList").setVisible(false); 
}
				oController.getView().getModel("orderListItem").refresh();
			parent.selectVisibleFlag = oController.getView().getModel("orderListItem").getData().length;
			Input.fninputFocus(oController);
			Input.fnClearInput(oController);
		/*	var oModelForSSCC = new sap.ui.model.json.JSONModel();
				oModelForSSCC.setData(oData.results[0]);
				oController.getView().setModel(oModelForSSCC,"orderListItem");*/
		
			};
			var fnError=function(oError){
					console.log(oError);
					oController.fnerrormessage(oController);
					
			}; 
			//Gateway Service to Get the list of EventType
			oDataModel.read("SsccDetailSet?$filter=( Lenum eq '"+SSCCVal+"') ", null, null,true,fnSuccess,fnError);
		},

// fninputFocus:function(){
// 		jQuery.sap.delayedCall(1000, this, function() {
// 			 this.getView().byId("Idinput").focus();
// 			 if(sap.ui.Device.system.phone || sap.ui.Device.system.tablet){
// 			  Keyboard.hide();
// 			 }
		
// 			});	
// 		},
		
// fnClearInput: function() {
// 			var oController = this;
// 			oController.getView().byId("Idinput").setValue("");
// 		},		
		
fnerrormessage: function(oController){
// var oController = this;
	var errorMessageText = oController.getView().getModel("i18n").getResourceBundle().getText("invalidScannedValue");
				MessageBox.error(
					errorMessageText, {
						onClose: function(sButton) {
							if (sButton === sap.m.MessageBox.Action.CLOSE) {
								Input.fnClearInput(oController);
								Input.fninputFocus(oController);
							}
						}

					});
}, 
	onPressDelete:function(evt){
	
// var getList  = this.getView().byId("list");
// calculating the index of the selected list item
var oController=this;
 var oList = evt.getSource().getParent().getSwipedItem().sId.split("-").pop();
var oData = oController.getView().getModel('orderListItem').getData();
oData.splice(oList, 1);
oController.getView().getModel('orderListItem').setData(oData);
oController.getView().getModel('orderListItem').refresh(true);
if(oData.length === 0){
oController.getView().byId("orderList").setVisible(false);      	
}else{
	oController.getView().byId("orderList").setVisible(true);  
}
	},
			onAfterRendering: function() {
			var oController=this;
				parent.addClasstoolbar  = oController.getView().getContent()[0].getAggregation('pages')[0].getAggregation('footer').getId();
				$('.keypadToolbar').on("tap",function() {
				$("#"+parent.addClasstoolbar).addClass("toolbarSelectedClass");
			oController.onPressDestination();	
			});	 
			},
			onPressDestination:function(){
				var router =	sap.ui.core.UIComponent.getRouterFor(this); 
                                router.navTo("listTargetInfo", null);	
			},
			
			onNavBack: function () {
		
		var router =	sap.ui.core.UIComponent.getRouterFor(this); 
                                router.navTo("overview", null);
		
		},
			fnCameraScan:function(){
				var oController=this, key="ListView";
			Cemera.fnCameraScan(oController,key);
		},
		inputLiveChange:function(){
			var oController=this, key="ListView";
			Input.inputLiveChange(oController,key);
				
			}

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf TransferOrder.view.ListView
		 */
		//	onExit: function() {
		//
		//	}

	});

});