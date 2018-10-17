sap.ui.define([
	"TransferOrder/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("TransferOrder.controller.listTargetInfo", {
		onInit:function(){
	var oController = this;
	var oRouter = oController.getRouter();
	oRouter.getRoute("listTargetInfo").attachPatternMatched(this._onObjectMatched, this);
},

	_onObjectMatched: function() {
		var oController = this;
		if(parent.selectVisibleFlag >1){
	oController.getView().byId("storageFlexId").setVisible(false);
		}else{
			oController.getView().byId("storageFlexId").setVisible(true);
		}
		
		},
onPressAccept:function(){
		var router =	sap.ui.core.UIComponent.getRouterFor(this); 
                                router.navTo("orderData", null, true);
},
	
			onAfterRendering: function() {
				var oController = this;
		$('.StorageBinBox').on("tap",function() {
		oController.onPressStorageBin();
			});
			},
			
onPressStorageBin:function(){
var router = sap.ui.core.UIComponent.getRouterFor(this); 
			router.navTo("enterStorageBin", null);		
}
	
	});

});