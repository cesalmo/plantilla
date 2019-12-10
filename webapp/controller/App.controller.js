sap.ui.define([
	"sap/ui/core/mvc/Controller",
], function (Controller) {
	"use strict";

	return Controller.extend("cam.its.controller.App", {

		// onInit()
		// onBeforeRendering()
		// onAfterRendering()
		// onExit()
		onInit: function () {

		},

		onPressBotonConsulta: function (e) {
			console.log("boton");
			var sinputMatnr = this.byId("inputMatnr").getValue();

			//SIMULAR LLAMADA AJAX Y CREAR MODELO
			// recupera template y bindea modelo
			var oModel = this.getView().getModel();
			var oList1 = this.byId("list1");
			var olist1Template = this.byId("list1Template");
			oList1.setModel(oModel);
			oList1.bindItems("/mydata", olist1Template);
		},
		onItemSelected: function(e){
			// var sPath = e.getSource().getBindingContext().getPath();
			// var oPanel1 = this.byId("panel1");
			// var oModel = this.getView().getModel();
			// oPanel1.setModel(oModel);
			// oPanel1.bindElement({path : sPath});
			// oPanel1.setVisible(true);

			// recupera router de componente y navega
			var oComponent = this.getOwnerComponent();
			var oRouter = oComponent.getRouter();
			oRouter.navTo("toDetail");

		}

	});

});