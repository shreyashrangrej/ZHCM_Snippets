sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.hr.sapZHR_INFO15ZHCM_INFOTYPE15.controller.HR1", {

		onInit: function() {
			this.oRouter = this.getOwnerComponent().getRouter(this);
			this.oRouter.attachRoutePatternMatched(this._onRouterMatch, this);
		},

		onAdd: function(oEvent) {
			this.oRouter.navTo("HR2R");
		},
		onDelete:function(oEvent){
			
		},
		onUpdate: function(oEvent){
			
		},
		onExpTable:function(oEvent){
			
		},
		onDate: function(oEvent) {
			var DatValue = this.getView().byId("idTo").getValue();
			var oModel = this.getOwnerComponent().getModel();
			var oData = "/EMP_DATASET";
			oModel.read(oData, {
				filters: [
					new sap.ui.model.Filter("MMYEAR", sap.ui.model.FilterOperator.EQ, DatValue)
				],
				success: function(req, res) {
					this.getOwnerComponent().getModel("tabModel").setData(req.results);
				}.bind(this),
				error: function(oErr) {}
			});
		}

	});

});
