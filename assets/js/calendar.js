class Calendar{
	constructor(className){
	  this.className=className;
	  this.month=this.getMonth();
	  this.year=this.getYear(); 
	  this.view();
	};
	
	html(){
		return '<div class="calendar__container">'+   
		        '<nav class="mounth__previous button" onclick="calendar.previous();"> < </nav>'+
				           '<div class="month month--inline">'+
				               '<span class="month__current">month </span>'+
				           '</div>'+
				           '<div class="year year--inline">'+
				               '<div class="year__previous"></div>'+
				               '<span class="year__current"> year</span>'+
				               '<div class="year__next"></div>'+
				           '</div>'+
						   '<nav class="mounth__next button" onclick="calendar.next();"> ></nav>'+
				           '<table class="dates"></table>'+
				      '</div>'+
					  '<footer>I&K 2020</footer>';         
	}
	
    view(){	
     	if(this.className){
		  let calendars=document.getElementsByClassName(this.className);
		  for(let i=0;i<calendars.length;i++){
		    calendars[i].innerHTML=this.html();
		  }
     	}  	
	};
    
    //#let's check if arg exactly a number of month 
    checkMonth(arg){  
      if(isNaN(arg)||arg>11 || arg<0){
         return this.month;
      }else return arg;
    };

    //# Sunday , 20 August 2017
    fullDate() {
      return this.getDayOfWeek(this.numberOfCurrentDay())+" , "+
             this.currentDate()+" "+this.getMonthNameBy(this.month)+
             " "+this.year;
    };

    //#let's shift dates to their position column(mn,tu..., 2->Tue) ..)
    _shift(weekList){
      for (let week in weekList){
        if(weekList[week].length<5){
           weekList[week].unshift('');
        }else if(weekList[week].length==5 && weekList[week][0]!=1){
          weekList[week].unshift('');
        }else{
			break;
		}
      }
      return weekList;      
    };

    // make a table
    createRows(numRows){
      if(numRows<1){
        throw new Error('It cant be zero number of table!');
      }

      let table = document.getElementsByClassName("dates");
      let dayNames = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
      let th = '';
	  
      dayNames.forEach(function(el){
        th+="<th>"+el+"</th>";    
      });
    
      for(let j=0;j<table.length;j++){ 
		table[j].innerHTML=th;
          for(let cnt=1;cnt<=numRows;cnt++){
		    let tr = document.createElement('tr');
		    table[j].appendChild(tr);
          }   
	   } 
    };
	
	//set value to dom elements
	setFor(className,callback){
		let nodes=document.getElementsByClassName(className);
		for(let i=0;i<nodes.length;i++){
			nodes[i].innerHTML=callback;
		}
	}

    //let's sort dates by their weekdays name Mon[1,2,3,4],Tue[3,4,5,6]
    sortDates(m,y){	
	  let month=this.checkMonth(m);
	  let year=y;
      this.setFor("month__current",this.getMonthNameBy(month));
      this.setFor("year__current",year);
      const week = {mn:[],te:[],wd:[],th:[],fr:[],st:[],sn:[]};
      for(let j=1;j<=this.getDaysInMonth(month);j++){
        let  tmp = this.getMonthNameBy(month)+' '+j+', '+year;
        let weekName = new Date(tmp).getDay();
        switch(weekName){
          case 0:week.sn.push(j);
          break
          case 1:week.mn.push(j);
          break;
          case 2:week.te.push(j);
          break;
          case 3:week.wd.push(j);
          break;
          case 4:week.th.push(j);
          break;
          case 5:week.fr.push(j);
          break;
          case 6:week.st.push(j);
          break;
        }
      }
      return week; 
    };
	
    clear(dates){
      let el=document.getElementsByClassName(dates);
	  for(let j=0;j<el.length;j++){
		  el[j].innerHTML='';
	  }  
	};

    //lets init calendar
    init(){  
	  let sortedDates=this.sortDates(this.inc,this.year);
	  let dates=this._shift(sortedDates);
      this.createRows(6);
      for (let props in dates){
        for(let i=0;i<dates[props].length;i++){
        let table=document.getElementsByClassName("dates");
		for(let j=0;j<table.length;j++){
		 let td = document.createElement('td');
              td.innerHTML = dates[props][i];
				  table[j].rows[i+1].appendChild(td);
				  /*if(dates[props][i] == this.getDate() && this.getYear()==_year && this.getMonthBy(this.getMonth())==_month){
                  td.style.background = "#ccc";
				  }*/
			  }
        } 
      } 
    };

     // increment for month
    next(){
		this.clear('dates');
		++this.month;
      if(this.month>11) { 
	    this.month%=11;
	    ++this.year;
        this.init();
      }else {
		  this.init();
	  }
    };
	
	previous(){
		this.clear('dates');
		--this.month;
      if(this.month<0) { 
	    this.month=11;
	    --this.year;
        this.init();
      }else {
		  this.init();
	  }
    };


    // # 0- Sunday 6- Suturday
    numberOfCurrentDay(){
      return new Date().getDay();
    };
	
	
    // # 5 - current date
    currentDate(){
      return new Date().getDate();
    };

	//Friday
    getDayOfWeek(day){
		if(day>6 || day<0)
		  throw new Error('Incorrect number of week. Please check it');
      const week = 
      ["Sunday","Monday","Tuesday",
        "Wednesday","Thursday","Friday",
        "Saturday"];
      return week[day];
    };
	
    // # 0-december 11-november
    getMonth(){
     return new Date().getMonth();
    };

	//# 2019
    getYear(){
     return new Date().getFullYear();
    };

    //# how many days of the month
    getDaysInMonth(month){ 
      return 32-new Date(
        this.getYear(), 
        month,32).getDate(); 
    };

	// # July
    getMonthNameBy(number){ 
      let n = this.checkMonth(number); 
      const Months=[' Junuary',' February ',' March ',
             ' April ',' May ',' Jun ',' July ',' August ',
             ' September ', ' October ',' November ',' December ']; 
      return Months[n];
    };
	 
}

let calendar = new Calendar("calendar");
calendar.init();


