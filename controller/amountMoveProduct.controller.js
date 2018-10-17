sap.ui.define([
	"TransferOrder/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("TransferOrder.controller.amountMoveProduct", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf TransferOrder.view.amountMoveProduct
		 */
		//	onInit: function() {
		//
		//	},
	
		//for changing the Unit of amount
onClickUnit:function(){
var unitValue = this.getView().byId("unitTextId").getText();
if(unitValue === "ME"){
this.getView().byId("unitTextId").setText("kpl");	
}else{
this.getView().byId("unitTextId").setText("ME");		
}
},
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf TransferOrder.view.amountMoveProduct
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf TransferOrder.view.amountMoveProduct
		 */
		onAfterRendering: function() {
			var oController =this;
				parent.addClasstoolbar  = oController.getView().getContent()[0].getAggregation('pages')[0].getAggregation('footer').getId();
				$('.amountToolbar').on("tap",function() {
				$("#"+parent.addClasstoolbar).addClass("toolbarSelectedClass");
			oController.onPressContinue();	
			});	
			$('.key').on("tap",function() {
		    var numBox = document.getElementsByClassName('numBox');
		    if (this.innerHTML == '0') {
		      if ($(".numBox").text().length > 0){
		        $('.numBox').text($(".numBox").text() + this.innerHTML);
		      }
		    } else{
		      //numBox.innerHTML = numBox.innerHTML + this.innerHTML;
		      $('.numBox').text($(".numBox").text() + this.innerHTML);
}
    event.stopPropagation();
  });

  $('.btn').on("tap",function() {
    if (this.innerHTML == '-') {
      var numBox = document.getElementsByClassName('numBox');
      if ($(".numBox").text().length > 0) {
       $('.numBox').text($(".numBox").text() + " ");
      }
    } else {
    
      $(".numBox").text('');
    
}
    event.stopPropagation();
  });
			},
		onPressContinue:function(){
				var oController=this;
				var router =	sap.ui.core.UIComponent.getRouterFor(this); 
                                router.navTo("enterSourceInfo", null, true);
                              $("#"+parent.addClasstoolbar).removeClass("toolbarSelectedClass");
			}

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf TransferOrder.view.amountMoveProduct
		 */
		//	onExit: function() {
		//
		//	}

	});

});