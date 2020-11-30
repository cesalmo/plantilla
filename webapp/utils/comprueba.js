sap.ui.define([], function () {
    'use strict';
    return {
        Page1InputEmpleado1: function (oJsonPage1) {

            // return {
            //     "status": true || false -> con false la rutina que llama se para. con true continua
            //     "setValueStateText": "mensaje"
            //     "setValueState": sap.ui.core.ValueState.Error -> tipo de estado del campo
            // }

            // comprueba que no esta vacio
            var ninputEmpleado1 = oJsonPage1.EmpleadoNr;

            if (!ninputEmpleado1) {
                return {
                    "status": false,
                    "setValueStateText": "informar campo",
                    "setValueState": sap.ui.core.ValueState.Error
                }

            } else return {
                "status": true,
                "setValueStateText": "",
                "setValueState": sap.ui.core.ValueState.None
            }

        }

    }
});