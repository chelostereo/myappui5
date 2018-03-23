sap.ui.define(
		["sap/ui/core/UIComponent"],
		function (UIComponent) {
			"use strict";
			
			return UIComponent.extend("opensap.bootcamp.myappui5.Component", {
				metadata: {
					manifest: "json"
				},
				init: function(){
					// call the init function of the parent
					UIComponent.prototype.init.apply(this, arguments);
					
					// additional inizialitation can be done in here
				}
			});
		});