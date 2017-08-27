
// caledar view

define(function(){
     		 return {
     		 	    view:function(){
	     		       return '<div id="container">'+   
				          '<div id="caption">'+  
				               '<span id="currentDate">dd/mm/yyyy</span>'+
				           '</div>'+
				           '<div id="month">'+
				               '<nav id="pre_m"></nav>'+
				                 '<span id="_month">month</span>'+
				               '<nav id="next_m"></nav>'+
				           '</div>'+
				           '<div id="year">'+
				               '<div id="pre_y"></div>'+
				                 '<span id="_year">year</span>'+
				               '<div id="next_y"></div>'+
				           '</div>'+
				           '<table id = "dates"></table>'+
				      '</div>';         
	                }
	   
              };
});

