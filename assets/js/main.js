// config.js

requirejs.config({
    baseUrl: '',
    paths: {
        calendar: 'modules/calendar',
        view: 'modules/view',
        engine:'assets/js/modules/engine'
    }
});


// actually main point 
require(["engine"],function(engine){

    
	var engine = new engine();
   				   
	var cellOfMonth = new Date().getMonth();
	var cellOfYear = new Date().getFullYear(); 
				  
				   
	// init
	engine.init(engine.dateToDay(cellOfMonth,cellOfYear));

	// month change actions 
   	var month = document.getElementById('month');
	month.onclick = function(evn,tmp){
		var target = evn.target;
		var t = 0;
		if(target.id == 'pre_m'){
					      
		   if(cellOfMonth==0){
		   	 var currentMonth = 12;
		   	 cellOfYear = engine.decYear(cellOfYear);
		   	 cellOfMonth = engine.decMonth(currentMonth);
		   	 engine.init(engine.dateToDay(cellOfMonth,cellOfYear));
			 document.getElementById("_month").innerHTML=engine.getMonthBy(cellOfMonth);
			 document.getElementById('_year').innerHTML = cellOfYear; 
		   }else{
		   	 var currentMonth = cellOfMonth;
		   	 cellOfMonth = engine.decMonth(currentMonth);
		   	 engine.init(engine.dateToDay(cellOfMonth,cellOfYear));
			 document.getElementById("_month").innerHTML=engine.getMonthBy(cellOfMonth);
		   }		      					      
		}else{
					        
			   if(target.id == 'next_m'){
					if(cellOfMonth==11){
						 var currentMonth = -1;
						 cellOfYear = engine.incYear(cellOfYear);
						 document.getElementById('_year').innerHTML = cellOfYear;
					}else{
						var currentMonth = cellOfMonth;
					}	           
						cellOfMonth = engine.incMonth(currentMonth);
					    engine.init(engine.dateToDay(cellOfMonth,cellOfYear));
					    document.getElementById("_month").innerHTML=engine.getMonthBy(cellOfMonth); 
			    }
		     }
	}
    
	// years change actions
	var year = document.getElementById('year');
	year.onclick =function(evn){
			var target = evn.target;
		if(target.id == 'pre_y'){
				cellOfYear = cellOfYear==0?new Date().getFullYear():cellOfYear;
				cellOfYear = engine.decYear(cellOfYear);
				engine.init(engine.dateToDay(cellOfMonth,cellOfYear)); 
				cellOfYear = document.getElementById('_year').innerHTML = cellOfYear;
				      
		}else{
				if(target.id == 'next_y'){
				    cellOfYear = cellOfYear==0?new Date().getFullYear():cellOfYear;
				    cellOfYear = engine.incYear(cellOfYear);
				    engine.init(engine.dateToDay(cellOfMonth,cellOfYear));
				    document.getElementById('_year').innerHTML = cellOfYear; 
			 	}            
			}          
	};       
});