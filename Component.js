sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"TransferOrder/model/models",
	"sap/ui/model/json/JSONModel"
], function(UIComponent, Device, models,JSONModel) {
	"use strict";

	return UIComponent.extend("TransferOrder.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			
			var array = {
				"tunam":""
			};
			var Model = new sap.ui.model.json.JSONModel(array);
			this.setModel(Model, "SuccessModel");
			// call the base component's init function
			var targetInfo = {
		"MovType":"",
		"StorageType":"",
		"StorageBin":""
		
	};
	var oModel = new JSONModel (targetInfo);
	this.setModel(oModel, "SSCCDetailModel");
	var SearchOrder = {
		"StorageType":"",
		"SSLocation":"",
		"ProductName":"",
		"StorageClass":""
		
	};
	var oModel1 = new JSONModel (SearchOrder);
	this.setModel(oModel1, "SearchOrderModel");
			UIComponent.prototype.init.apply(this, arguments);
			// set the device model
			this.getRouter().initialize();
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});