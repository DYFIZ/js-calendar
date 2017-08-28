<h1>Simple js calendar</h1>

1.Please install requirejs use (npm install requirejs);

2.Then add this code to your index.html :

    
        <div id="your_calendar_id">calendar</div>

        <script>
        var require = {
            deps: ["modules/calendar"],
            callback: function(calendar) {
               calendar.init("your_calendar_id");
            }
        };
      </script>
      <script data-main="assets/js/main" src="node_modules/requirejs/require.js"></script>
      
  

3. Set calendar id calendar.init("your_calendar_id");  



