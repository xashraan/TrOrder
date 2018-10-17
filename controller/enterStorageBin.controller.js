sap.ui.define([
	"TransferOrder/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("TransferOrder.controller.enterStorageBin", {
onInit:function(){
	var oController = this;
	var oRouter = oController.getRouter();
			oRouter.getRoute("enterStorageBin").attachPatternMatched(this._onObjectMatched, this);
},

	_onObjectMatched: function() {
		var oController = this;
		$(".numBox").text("");
		},

		onAfterRendering: function() {
			$('.key').on("tap", function() {
				var numBox = document.getElementsByClassName('numBox');
					$('.numBox').text($(".numBox").text() + this.innerHTML);
				});

			$('.btn').on("tap", function() {
				if (this.innerHTML === '_') {
					var numBox = document.getElementsByClassName('numBox');
					if ($(".numBox").text().length > 0) {
						$('.numBox').text($(".numBox").text() + " ");
					}
				} else {
					var barcodeString = $(".numBox").text();
					$(".numBox").text(barcodeString.slice(0, barcodeString.length - 1));
				}

			});
		},
		onPressAccept: function() {
			var router = sap.ui.core.UIComponent.getRouterFor(this);
				var getStorageBin = $(".numBox").text();
			if(	this.searchOrder ==="X"){
			var SearchOrderModel = this.getView().getModel("SearchOrderModel");
			SearchOrderModel.getData().SSLocation = getStorageBin;
			router.navTo("searchOrder", null);	
			this.searchOrder ="";
			}else{
			var StorageBinModel = this.getView().getModel("SSCCDetailModel");
			StorageBinModel.getData().StorageBin = getStorageBin;
			
			router.navTo("targetInformation", null);	
			}
		
		}

	});

});