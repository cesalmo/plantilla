sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"cam/its/utils/comprueba",
	"sap/m/MessageToast",
	"sap/ui/core/Fragment",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"

], function (Controller, JSONModel, comprueba, MessageToast, Fragment, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("cam.its.controller.App", {

		comprueba: comprueba,

		// onInit()
		// onBeforeRendering()
		// onAfterRendering()
		// onExit()
		// onInit: function () {


		// },

		constants: {
			'employee': 'http://dummy.restapiexample.com/api/v1/employee'
		},

		// onNavPage2: function (oEvent) {
		// 	//comprueba si campo Nr empleado esta informado

		// 	var oResult = this._compruebaPageInputEmpleado1();
		// 	if (oResult === false) { return };

		// 	var sURL = this.constants.employee;
		// 	var sNumeroEmpleado = this.byId('inputEmpleado1').getValue();
		// 	var settings = {
		// 		"url": sURL + '/' + sNumeroEmpleado.toString(),
		// 		"method": "GET",
		// 		"timeout": 0,
		// 		"headers": {
		// 			"Accept": "application/json, text/plain, */*",
		// 		},
		// 	};


		// 	// @ts-ignore
		// 	//   $.ajax(settings).done(function (response) {

		// 	var response = {
		// 		"status": "success",
		// 		"data": {
		// 			"id": 1,
		// 			"employee_name": "Tiger Nixon",
		// 			"employee_salary": 320800,
		// 			"employee_age": 61,
		// 			"profile_image": ""
		// 		},
		// 		"message": "Successfully! Record has been fetched."
		// 	};
		// 	this.byId('p1').setBusy(true);
		// 	setTimeout(() => {
		// 		var oModel = new JSONModel(response.data);
		// 		var oSimpleformP2 = this.byId('SimpleFormP2');
		// 		oSimpleformP2.setModel(oModel, 'modelo1');

		// 		var oVistaRaiz = this.byId('vistaRaiz');
		// 		oVistaRaiz.to(this.byId('p2'));
		// 		this.byId('p1').setBusy(false);
		// 	}, 3000);


		// 	//   });


		// },
		page1onNavtoPage2: function (oEvent) {


			if (!this._oFragmentPage1) {
				Fragment.load({
					name: "cam.its.view.Page2",
					controller: this
				}).then(function (oFragmentPage1) {

					this._oFragmentPage1 = oFragmentPage1;

					// @ts-ignore
					var bResult = this._page1OnNavPage2SetModel();
					if (bResult === false) {
						return
					}
				}.bind(this));
			} else {
				var bResult = this._page1OnNavPage2SetModel();
				if (bResult === false) {
					return
				}
			}


		},

		onInputEmpleado1Change: function (oEvent) {
			this.comprueba.InputEmpleado1();

		},
		onNavPage1to0: function (oEvent) {
			var oVistaRaiz = this.byId('vistaRaiz');
			oVistaRaiz.to(this.byId('p0'))
		},
		onPage0Salir: function () {
			var msg = "Usuario ha salido";
			MessageToast.show(msg);
		},
		page0onNavPage1: function () {

			var oVistaRaiz = this.byId('vistaRaiz');
			oVistaRaiz.to(this.byId('p1'))
		},
		page0OnNavPage3: function () {

			if (!this._oFragmentPage3) {
				Fragment.load({
					name: "cam.its.view.Page3",
					controller: this
				})

					.then(function (oFragmentPage3) {
						this._oFragmentPage3 = oFragmentPage3;

						// @ts-ignore
						var oModel = this.getOwnerComponent().getModel("employees");
						this._oFragmentPage3.setModel(oModel);

						// @ts-ignore
						var oVistaRaiz = this.byId('vistaRaiz');
						oVistaRaiz.addPage(this._oFragmentPage3);

						oVistaRaiz.to(this._oFragmentPage3);
					}.bind(this));
			} else {
				var oVistaRaiz = this.byId('vistaRaiz');
				oVistaRaiz.to(this._oFragmentPage3)
			}

		},
		page1OnSearchPage1SelectDialog: function (oEvent) {
			var sValue = oEvent.getParameter("value");
			var oFilter = new Filter("employee_name", FilterOperator.Contains, sValue);
			var oBinding = oEvent.getParameter("itemsBinding");
			oBinding.filter([oFilter]);
		},
		page1OnSubmitInputEmpleado1: function (oEvent) {

			var oResult = this._compruebaPageInputEmpleado1();

		},
		page1OnConfirmPage1SelectDialog: function (oEvent) {

			var oSelectedValue = oEvent.getParameter('selectedItem').getBindingContext().getProperty("id");
			this.byId('inputEmpleado1').setValue(oSelectedValue)
		},
		page1OnInputEmpleado1HelpRequest: function (oEvent) {

			if (!this._oDialogPage1SelectDialog1) {
				Fragment.load({
					name: "cam.its.dialogs.page1SelectDialog1",
					controller: this
				}).then(function (oDialog) {

					this._oDialogPage1SelectDialog1 = oDialog;
					// @ts-ignore
					this._oDialogPage1SelectDialog1.setModel(this.getOwnerComponent().getModel("employees"));
					this._oDialogPage1SelectDialog1.open();
				}.bind(this));
			} else {
				this._oDialogPage1SelectDialog1.open();
			}

		},
		page2OnNavPage1: function () {
			var oVistaRaiz = this.byId('vistaRaiz');
			oVistaRaiz.to(this.byId('p1'))
		},

		page3OnNavPage0: function () {
			var oVistaRaiz = this.byId('vistaRaiz');
			oVistaRaiz.to(this.byId('p0'))
		},

		_compruebaPageInputEmpleado1: function () {
			// Comprueba si campo esta vacio
			var oJsonPage1 = JSON.parse(this.getOwnerComponent().getModel("page1").getJSON());
			var oResult = comprueba.Page1InputEmpleado1(oJsonPage1)
			this.byId('inputEmpleado1').setValueStateText(oResult.setValueStateText)
			this.byId('inputEmpleado1').setValueState(oResult.setValueState);

			if (oResult.status === false) {
				return false
			} else { return true }
		},
		_page1OnNavPage2SetModel: function () {

			// @ts-ignore
			var oModel = this.getOwnerComponent().getModel("employees");

			// @ts-ignore
			var oJsonData = JSON.parse(this.getOwnerComponent().getModel("page1").getJSON());

			// valida dato introducido
			var oResult = this._compruebaPageInputEmpleado1();
			if (oResult === false) { return false };

			var sEmpleadoNr = oJsonData.EmpleadoNr;
			var aPropertyData = oModel.getProperty('/data/');
			// Busca si existe empleado
			function contieneId(id) {
				return function (value, index) {
					return value.id === id;
				}
			};

			var aFilter = aPropertyData.filter(contieneId(sEmpleadoNr));

			if (aFilter.length === 0) {
				var msg = "Usuario no encontrado";
				MessageToast.show(msg);
				return false
			} else {
				var oNewModel = new JSONModel(aFilter[0]);
			}

			var oContext = oNewModel.getContext('/')
			this._oFragmentPage1.setModel(oNewModel);
			this._oFragmentPage1.setBindingContext(oContext)
			// @ts-ignore
			var oVistaRaiz = this.byId('vistaRaiz');
			oVistaRaiz.addPage(this._oFragmentPage1);
			oVistaRaiz.to(this._oFragmentPage1)

			return true;
		}


	});

});