sap.ui.define([
	"TransferOrder/controller/BaseController",
	'sap/m/MessageBox',
	"TransferOrder/model/Input",
		"TransferOrder/model/Cemera"
], function(BaseController,MessageBox,Input,Cemera) {
	"use strict";

	return BaseController.extend("TransferOrder.controller.moveProduct", {
		onInit:function(){
		var oController = this;

			var oRouter = oController.getRouter();
			oRouter.getRoute("moveProduct").attachPatternMatched(this._onObjectMatched, this);
	},	
	
		_onObjectMatched: function() {
			var oController = this;
			Input.fninputFocus(oController);
		},
	
		
		
	onAfterRendering: function() {
			var oController = this;
			$('.moveproductVboxclass').on("tap",function() {
			
			oController.onPresstarget();	
			});
		
				$('.moveproducLastVBoxClass').on("tap",function() {
			
			oController.onPressproductNumber();	
			});
			},
			onPresstarget:function(){
					var router = 	sap.ui.core.UIComponent.getRouterFor(this); 
                                router.navTo("searchBrand", null);	
	},
			onPresstScanPanel:function(oEvent){
				var router = 	sap.ui.core.UIComponent.getRouterFor(this); 
                                router.navTo("amountMoveProduct", null);		
			},
			onPressproductNumber:function(){
				var router = 	sap.ui.core.UIComponent.getRouterFor(this); 
                                router.navTo("enterProductNumber", null);			
			},
			fnCameraScan: function() {
					var oController=this, key="moveproduct";
			Cemera.inputLiveChange(oController,key);
		},
		inputLiveChange:function(){
			var oController=this, moveproduct;
			Input.inputLiveChange(oController,moveproduct);
				
			}

	});

});