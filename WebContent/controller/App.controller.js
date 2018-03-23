sap.ui.define(
	['sap/m/MessageToast','sap/ui/core/mvc/Controller'],
	function(MessageToast, Controller) {
		Controller.extend('opensap.bootcamp.myappui5.controller.App', {
			onShowHello: function() {
				MessageToast.show("Hello openSAP / Pressed");
			}
		});
	}
);