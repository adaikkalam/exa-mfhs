sap.ui.jsview("git.app", {

      getControllerName : function() {
         return "git.app";
      },

      createContent : function(oController) {
    	  	var button = sap.ui.commons.Button(this.createId(), {
    	  		text: 'Press Me'
    	  	});
    	  	
    	  	var another = sap.ui.commons.Button(this.createId(), {
    	  		text: 'Another Press Me'
    	  	});
    	  	
    	  	return [button , another];
      }

});
