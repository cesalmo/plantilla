sap.ui.define(
  ['sap/ui/core/mvc/Controller', 'sap/ui/core/routing/History'],
  /**
   * @class
   * @extends sap.ui.core.mvc.Controller
   * @name cam.its.controller.Detail
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   * @param {typeof sap.ui.core.routing.History} History
   */

  function(Controller, History) {
    return Controller.extend('cam.its.controller.Detail', {
      /**
       * @memberof cam.its.controller.Detail
       */

      onInit: function() {
        var oComponent = this.getOwnerComponent();
        var oRouter = oComponent.getRouter();
        oRouter
          .getRoute('toDetail')
          .attachPatternMatched(this._onRouteMatched, this);
      },

      _onRouteMatched: function() {},

      onNavBack: function(e) {
        var oHistory = History.getInstance();
        var sPreviousHash = oHistory.getPreviousHash();

        if (sPreviousHash !== undefined) {
          window.history.go(-1);
        } else {
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.navTo('toApp', true);
        }
      },
    });
  },
);
