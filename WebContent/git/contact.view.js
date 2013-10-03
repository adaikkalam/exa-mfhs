sap.ui.jsview("git.contact", {

      getControllerName : function() {
         return "git.contact";
      },

      createContent : function(oController) {
    	  	var button = sap.ui.commons.Button(this.createId(), {
    	  		text: 'Contact Me'
    	  	});
    	  	
    	  	return button;
      }

});
