sap.ui.define([
	"TransferOrder/controller/BaseController",
	"sap/ui/core/routing/History",
	"sap/ui/model/json/JSONModel"
], function(BaseController,History,JSONModel) {
	"use strict";
	var searchOrder;
	return BaseController.extend("TransferOrder.controller.SearchOrder", {
		
	onInit:function(){
	var oController =this;
	var oRouter = oController.getRouter();
			oRouter.getRoute("searchOrder").attachPatternMatched(this._onObjectMatched, this);	
},
	_onObjectMatched: function() {
		var oController = this;
		var SSCCDetailModel = oController.getView().getModel("SearchOrderModel");
	$(".StorageBinBox").text(SSCCDetailModel.oData.SSLocation);
		},


			onAfterRendering: function() {
	 var oController =this;
	parent.addClasstoolbar  = oController.getView().getContent()[0].getAggregation('pages')[0].getAggregation('footer').getId();
		
		$('.searchOrderToolbar').on("tap",function() {
				$("#"+parent.addClasstoolbar).addClass("toolbarSelectedClass");
			oController.onPressContinue();	
			});	  
				$('.StorageBinBox').on("tap",function() {

				oController.onPressSource();
			});
			$('.ProductNameBox').on("tap",function() {

				oController.onsearchBrand();
			});
	},
	onPressContinue:function(){
			var router =	sap.ui.core.UIComponent.getRouterFor(this); 
                                router.navTo("allOrderList", null, true);
		$("#"+parent.addClasstoolbar).removeClass("toolbarSelectedClass");	
	},
	onPressSource:function(){
		this.searchOrder = "X";
		var router = sap.ui.core.UIComponent.getRouterFor(this); 
			router.navTo("enterStorageBin", null);	
	},
	onsearchBrand:function(){
		this.searchOrder = "X";
		var router = sap.ui.core.UIComponent.getRouterFor(this); 
			router.navTo("searchBrand", null);	
	}

		
	
	});
});