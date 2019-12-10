/* eslint-disable valid-jsdoc */

sap.ui.define(
    ["sap/ui/core/mvc/Controller"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     */
    function(Controller){
    
        return Controller.extend( "cam.its.controller.Detail",{

            onInit: function(){
   
            var oComponent = this.getOwnerComponent();
            var oRouter = oComponent.getRouter();
            
            }


        });
    }
);