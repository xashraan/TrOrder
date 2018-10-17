sap.ui.define([
	"TransferOrder/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("TransferOrder.controller.orderData", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf TransferOrder.view.orderData
		 */
		onInit: function() {
		var data = [{
				"Lähde":"KV1 A1 00 123 00",
				"Kohde":"KV1 A1 00 111 00",
				"SSCC":"1111111111",
				"VY-tyyppi":"E3 EUR 120cm",
				"Lavan koko":"80 ME (5x 200g)",
				"Tuotenimi":"Pirkka kuivattu viikuna luomu"
				},
				{
				"Lähde":"KV1 A1 00 123 00",
				"Kohde":"KV1 A1 00 111 00",
				"SSCC":"2222222222",
				"VY-tyyppi":"E3 EUR 120cm",
				"Lavan koko":"80 ME (5x 200g)",
				"Tuotenimi":"Pirkka kuivattu viikuna luomu"
				},	{
				"Lähde":"KV1 A1 00 123 00",
				"Kohde":"KV1 A1 00 111 00",
				"SSCC":"2222222222",
				"VY-tyyppi":"E3 EUR 120cm",
				"Lavan koko":"80 ME (5x 200g)",
				"Tuotenimi":"Pirkka kuivattu viikuna luomu"
				},{
				"Lähde":"KV1 A1 00 123 00",
				"Kohde":"KV1 A1 00 111 00",
				"SSCC":"2222222222",
				"VY-tyyppi":"E3 EUR 120cm",
				"Lavan koko":"80 ME (5x 200g)",
				"Tuotenimi":"Pirkka kuivattu viikuna luomu"
				}];
				var oController=this;
			var omodel= new sap.ui.model.json.JSONModel();
			 omodel.setData(data);
oController.getView().setModel(omodel,"orderListItem");
			},
		
		/*	for scrolling the  order list*/
			onclickScroll:function(){
		var itemId =  this.getView().getContent()[0].getAggregation('pages')[0].getContent()[2].getContent()[0].getItems()[0].getId();
	var splitedId = 	itemId.split('-');
var dvalue = 	parseInt(splitedId[4]);
var downData = dvalue+1; 
   splitedId[4] =  downData.toString();
   var string = 	itemId.split('0');
   var stringval = string[0];
 var finalId =   stringval.concat(downData);
        $(".scrollListPanel").animate({
            scrollTop: $("#"+finalId).offset().top},
            'slow');
       
        	
			},
			onPressAccept:function(){
		var router = sap.ui.core.UIComponent.getRouterFor(this); 
                                router.navTo("orderStatusDetail", null, true);			
			}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf TransferOrder.view.orderData
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf TransferOrder.view.orderData
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf TransferOrder.view.orderData
		 */
		//	onExit: function() {
		//
		//	}

	});

});