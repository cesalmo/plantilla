sap.ui.define(
  ['sap/ui/core/UIComponent', 'sap/ui/core/ComponentSupport'],
  function(UIComponent) {
    'use strict';
    return UIComponent.extend('cam.its.Component', {
      metadata: {
        manifest: 'json',
      },

      /**
       * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
       * In this function, the device models are set and the router is initialized.
       * @public
       * @override
       */
      init: function() {
        // call the base component's init function
        UIComponent.prototype.init.apply(this, arguments);

        // initialize the error handler with the component
        // this._oErrorHandler = new ErrorHandler(this);

        // set the device model
        // this.setModel(models.createDeviceModel(), "device");

        // create the views based on the url/hash
        this.getRouter().initialize();
      }

      /**
       * The component is destroyed by UI5 automatically.
       * In this method, the ErrorHandler is destroyed.
       * @public
       * @override
       */
    //   destroy: function() {
    //     this._oErrorHandler.destroy();
    //     // call the base component's destroy function
    //     UIComponent.prototype.destroy.apply(this, arguments);
    //   },
    });
  },
);
