
// engine module

define("engine",function(){
    
     function engine(){
       return this.name;
     }

    //let's check if arg exactly a number of month 
    engine.prototype.checkMonth = function (arg){  
      if(isNaN(arg)||arg>11 || arg<0){
         var arg = this.getMonth();
         return arg;
      }else{return arg;}
    };

    // get a current Date for example: Sunday , 20 August 2017
    engine.prototype.currentDate = function () {
      return this.getDayOfWeek(this.getDay())+" , "+
             this.getDate()+" "+this.getMonthBy(this.getMonth())+
             " "+this.getYear();
    };

    //let's shift dates to their position (like 1 -> Mon, 2->Tue) ..)
    engine.prototype.compare = function(weekName){
      for (objKey in weekName){
        if(weekName[objKey][0]!=1){
          weekName[objKey].unshift('');
        }else{
          break;
        }
      }
      return weekName;      
    };

    // make a table
    engine.prototype.createRows = function(numRows){
      if(numRows<1){
        throw new Error('It cant be zero number of table!');
      }

      var table = document.getElementById("dates");
      var week = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
      var th = '';
      week.forEach(function(el){
        th+="<th>"+el+"</th>";    
      });
      var header = document.createElement('tr');
          header.id = 'months';
          header.innerHTML+=th;

      table.appendChild(header);              
      for(var cnt=1;cnt<=numRows;cnt++){
        var tr = document.createElement('tr');
            tr.id = cnt;      
            table.appendChild(tr);
        } 
      return 0;
    };

    //let's sort dates by their weekdays name Mon[1,2,3,4],Tue[3,4,5,6]
    engine.prototype.dateToDay = function(_month,_year){
      var month = _month==12?this.getMonth():_month;
      var year  = _year==0?this.getYear():_year;

      // set calendar current date in format dd/mm/year
      document.getElementById("currentDate").innerHTML=this.currentDate();
      
      // set month
      document.getElementById("_month").innerHTML=this.getMonthBy(month);

      // set year
      document.getElementById("_year").innerHTML=year; 

      var week = {mn:[],te:[],wd:[],th:[],fr:[],st:[],sn:[]};
      
      for(var j=1;j<=this.getDaysInMonth(month);j++){
        var  tmp = this.getMonthBy(month)+' '+j+', '+year;
        var weekName = new Date(tmp).getDay();
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
      }//end of loop
      return week; 
    };

    //decrement for month
    engine.prototype.decMonth = function(month){
      this.month = month-1; 
      if(this.month>0) {
        ++this.dec;  
        return this.month=month-1;
      }else
        return 0;    
    };

    //decrement for year
    engine.prototype.decYear = function(year){
      return this.year = year-1;
    };

    // clear tags elements
    engine.prototype.destroy = function(dates){
      document.getElementById(dates).innerHTML = '';
    };

    //lets init calendar
    engine.prototype.init = function(_dates){  
      
      var dates = this.compare(_dates);
      var _year = document.getElementById('_year').innerHTML;
      var _month = document.getElementById('_month').innerHTML;
      this.destroy('dates'); 
      
      this.createRows(6);
      
      var iter=0;
      for (var props in dates){
        for(var i=0;i<dates[props].length;i++){
          var td = document.createElement('td');
              td.innerHTML = dates[props][i];
              document.getElementById(i+1).appendChild(td);
              if(dates[props][i] == this.getDate() && this.getYear()==_year && this.getMonthBy(this.getMonth())==_month){
                  td.style.background = "#ccc";
              }
        }
        if(i<5){
          var td = document.createElement('td'); 
          document.getElementById('5').appendChild(td);
        }
      } 
      return 0;
    };

     // increment for month
    engine.prototype.incMonth = function(month){ 
      this.month = month+1;
      if(this.month<11) { 
        ++this.inc; 
        return this.month=month+1;        
      }else 
        return 11;    
    };

    engine.prototype.incYear = function(year){
      return this.year = year+1;
    };

    engine.prototype.getDay = function (){
      return new Date().getDay();
    };

    engine.prototype.getDate = function (){
      return new Date().getDate();
    };

    engine.prototype.getDayOfWeek = function (day){
      var week = 
      new Array("Sunday","Monday","Tuesday",
        "Wednesday","Thursday","Friday",
        "Saturday");
      return week[day];
    };

    engine.prototype.getMonth = function(){
     return new Date().getMonth();
    };

    engine.prototype.getYear = function (){
     return new Date().getFullYear();
    };

    // count day of the month
    engine.prototype.getDaysInMonth = function (month){ 
      return 32 - new Date(
        this.getYear(), 
        month,32).getDate(); 
    };

    engine.prototype.getMonthBy = function (n){ 
      var n = this.checkMonth(n); 
      var Months=['Junuary','February','March',
             'April','May','Jun','July','August',
             'September', 'October','November','December']; 
      return Months[n];
    };

    engine.prototype.getDayOfWeek = function(day){
      var week = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
      return week[day];
    };


    return engine;

});

