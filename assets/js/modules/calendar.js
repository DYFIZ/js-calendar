define(["modules/view"],function(view){
       return {
		 init:function(tagName){
	     		document.getElementById(tagName).innerHTML = view.view(); 		
		 }
	   } 	   	
});