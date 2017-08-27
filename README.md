#simple js calendar

1. Please install requirejs use (npm install requirejs) or (bower install requirejs)

2. Then add this code to your index.html :

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

  and don't forget to initialize your calendar like: calendar.init("your_calendar_id");  



