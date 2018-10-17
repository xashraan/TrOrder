sap.ui.define("TransferOrder/model/Cemera",
 [
	'sap/m/MessageBox',
	"TransferOrder/model/Input",
"TransferOrder/model/Barcode"
],function (MessageBox,Input,Barcode) {
	"use strict";
 
	var Cemera = {};
	

		Cemera.fnCameraScan = function(oController, key){
			Barcode.scan(
				function(mResult) {
							var Value = mResult.text;
				
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
				
				},
				function(Error) {
					// alert("Scanning failed: " + Error);
					MessageBox.error(
							Error
								
							);
				}
			);
		};
		
		return Cemera;

}, true );