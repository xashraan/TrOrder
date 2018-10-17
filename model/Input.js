sap.ui.define("TransferOrder/model/Input", [
	'sap/m/MessageBox'
],function (MessageBox) {
	"use strict";
 
	var Input = {};
	
	Input.fnClearInput= function(oController) {
			oController.getView().byId("Idinput").setValue("");
		};
	Input.fninputFocus =function(oController){
		jQuery.sap.delayedCall(1000, oController, function() {
			 oController.getView().byId("Idinput").focus();
			 if(sap.ui.Device.system.phone || sap.ui.Device.system.tablet){
			  Keyboard.hide();
			 }
		
			});	
		};
		Input.inputLiveChange = function(oController,key){
				var Value = oController.getView().byId("Idinput").getValue();
				if(Value.length === 20 ){
					if(key === "ScanAritical"){
						oController.onEventPress(Value);
					}else if (key === "ListView" ){
							oController.fnGetSSccDetails(Value);
					}else if(key === "replenishment"){
						oController.onSelectEvent(Value);
					}else if(key === "moveproduct"){
						oController.onPresstScanPanel(Value);
					}
						}else{
							var errorMessageText = 	oController.getView().getModel("i18n").getResourceBundle().getText("invalidScannedValue");
							MessageBox.error(
					errorMessageText, {
						onClose: function(sButton) {
							if (sButton === sap.m.MessageBox.Action.CLOSE) {
								Input.fnClearInput(oController);
								Input.fninputFocus(oController);
							}
						}

					});
						}
				
			};
		
		return Input;

}, true );