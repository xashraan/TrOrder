sap.ui.define([
	"TransferOrder/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("TransferOrder.controller.allOrderList", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf TransferOrder.view.allOrderList
		 */
			onInit: function() {
		var data = [{
				"SSCC":"11111111",
				"Tuotenimi":"Pirkka kuivattu viikuna luomu",
				"VY-tyyppi":"E3 EUR 120cm"
				
			},
			{
				"SSCC":"22222222",
				"Tuotenimi":"Pirkka kuivattu viikuna luomu",
				"VY-tyyppi":"E3 EUR 120cm"
				
			},
			{
				"SSCC":"33333333",
				"Tuotenimi":"Pirkka kuivattu viikuna luomu",
				"VY-tyyppi":"E3 EUR 120cm"
				
			},
			{
				"SSCC":"44444444",
				"Tuotenimi":"Pirkka kuivattu viikuna luomu",
				"VY-tyyppi":"E3 EUR 120cm"
				
			},
			{
				"SSCC":"55555555",
				"Tuotenimi":"Pirkka kuivattu viikuna luomu",
				"VY-tyyppi":"E3 EUR 120cm"
				
			},
			{
				"SSCC":"66666666",
				"Tuotenimi":"Pirkka kuivattu viikuna luomu",
				"VY-tyyppi":"E3 EUR 120cm"
				
			}
		];
				var oController=this;
			var omodel= new sap.ui.model.json.JSONModel();
			 omodel.setData(data);
oController.getView().setModel(omodel,"allOrderList");

			},
	onAfterRendering: function() {
			var oController=this;
	 var styleclass = oController.getView().getContent()[0].getAggregation('pages')[0].getContent()[1].getItems()[0].getId();
 	$("#"+styleclass).addClass("listBGColor");
 		parent.addClasstoolbar  = oController.getView().getContent()[0].getAggregation('pages')[0].getAggregation('footer').getId();
		$('.keypadToolbar').click(function() {
				$("#"+parent.addClasstoolbar).addClass("toolbarSelectedClass");
			oController.onPressContinue();	
			});	 	
	},
		onPressDelete:function(evt){
	
this.getView().byId("list");
// calculating the index of the selected list item
var oController=this;
var sPath = evt.getParameter('listItem').getBindingContextPath();
var iLength = sPath.length;
var iIndex = sPath.slice(iLength - 1);
// Removing the selected list item from the model based on the index
// calculated
var oModel = oController.getView().getModel('allOrderList').getData();
var oData = oModel;
var removed = oModel.splice(iIndex, 1);
oController.getView().getModel('allOrderList').setData(oData);
oController.getView().getModel('allOrderList').refresh(true);
	},
	onPressContinue:function(){
		parent.navOrderFlag = "x";
			var router =	sap.ui.core.UIComponent.getRouterFor(this); 
                                router.navTo("targetInformation", null);	
	}
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf TransferOrder.view.allOrderList
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf TransferOrder.view.allOrderList
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf TransferOrder.view.allOrderList
		 */
		//	onExit: function() {
		//
		//	}

	});

});