sap.ui.define([
		"TransferOrder/controller/BaseController",
	"sap/ui/core/routing/History",
	"sap/ui/model/json/JSONModel"
], function(BaseController,History,JSONModel) {
	"use strict";

	return BaseController.extend("TransferOrder.controller.TargetInformation", {
onInit:function(){
	var oController =this;
	var oRouter = oController.getRouter();
			oRouter.getRoute("targetInformation").attachPatternMatched(this._onObjectMatched, this);	
},
	_onObjectMatched: function() {
		var oController = this;
		var SSCCDetailModel = oController.getView().getModel("SSCCDetailModel");
	$(".StorageBinBox").text(SSCCDetailModel.oData.StorageBin);
		},
	onAfterRendering: function() {
	
		 var oController =this;
/*var toolbarClass = oController.getView().getContent()[0].getAggregation('pages')[0].getAggregation('footer').aCustomStyleClasses;
	var addClasstoolbar  = oController.getView().getContent()[0].getAggregation('pages')[0].getAggregation('footer').getId();
 for (var j=0; j<toolbarClass.length; j++) {
       if(toolbarClass[j]=="toolbarSelectedClass"){
       		$("#"+addClasstoolbar).removeClass("toolbarSelectedClass");
       		
       }
    }*/
		parent.addClasstoolbar  = oController.getView().getContent()[0].getAggregation('pages')[0].getAggregation('footer').getId();
		
		$('.continueToolbar').on("tap",function() {
				$("#"+parent.addClasstoolbar).addClass("toolbarSelectedClass");
			oController.onPressContinue();	
			});	  
			
				$('.StorageBinBox').on("tap",function() {

				oController.onPressStorageBin();
			});
	},
	 
		onPressContinue: function () {
			var oController=this;
			var TragetInformation = oController.getOwnerComponent().getModel("SSCCDetailModel");
				
			var MovType = 	oController.getView().byId("idMovType").getSelectedItem().getText();
			var StorageType = 	oController.getView().byId("idStorageType").getSelectedItem().getText().split(",")[0];
			var StorageBin = 	$(".StorageBinBox").text();
			if(MovType!=="" ||StorageType!==""||StorageBin!==""||MovType!==undefined ||StorageType!==undefined||StorageBin!==undefined){
				TragetInformation.oData.MovType = MovType;                         
				TragetInformation.oData.StorageType = StorageType;  
				TragetInformation.oData.StorageBin = StorageBin;  
				TragetInformation.refresh(true);
			}else{
				return false;
			}
				var router =	sap.ui.core.UIComponent.getRouterFor(this); 
				if(	parent.navOrderFlag == "x"){
					
                                router.navTo("orderDetails", null);
                                parent.navOrderFlag = "";
                                $("#"+parent.addClasstoolbar).removeClass("toolbarSelectedClass");
				}else{
					router.navTo("replenishmentOrder",null);	
					$("#"+parent.addClasstoolbar).removeClass("toolbarSelectedClass");
				}
	
				
	},
		// navToStorageLoc:function(target, flag){
		// 	var router = sap.ui.core.UIComponent.getRouterFor(this); 
  //                              router.navTo(target, null, flag);	
		// },
		/*	Author: xbhargpo
			Date : 12/10/2018
			Purpose: enter the storage bin
			*/
		onPressStorageBin:function(){
			var router = sap.ui.core.UIComponent.getRouterFor(this); 
			router.navTo("enterStorageBin", null);	
		}
	});
});