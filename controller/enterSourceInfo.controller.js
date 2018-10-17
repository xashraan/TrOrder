sap.ui.define([
	"TransferOrder/controller/BaseController"
], function(Controller) {
	"use strict";

	return Controller.extend("TransferOrder.controller.enterSourceInfo", {

			onAfterRendering: function() {
						 var oController =this;
					parent.addClasstoolbar  = oController.getView().getContent()[0].getAggregation('pages')[0].getAggregation('footer').getId();
					$('.sourceToolbar').on("tap",function() {
								$("#"+parent.addClasstoolbar).addClass("toolbarSelectedClass");
							oController.onPressContinue();	
							});	  
					},
				onPressContinue:function(){
						parent.navOrderFlag = "x";
						var router =	sap.ui.core.UIComponent.getRouterFor(this); 
		                 router.navTo("targetInformation", null, true);
		              $("#"+parent.addClasstoolbar).removeClass("toolbarSelectedClass");	
				}

	
	});

});