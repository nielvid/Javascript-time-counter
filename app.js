

 var minutes = document.getElementById("minutes");
        var seconds = document.getElementById("seconds");
        var time = 0;
        setInterval( count, 1000);
        
        //function to count minutes and seconds
        function count(){
            time++;
            minutes.innerHTML = append(parseInt(time/60));
            seconds.innerHTML = append(time%60);
            
            
            function append(value){
            var x = value + "";
            if(x.length < 2)
            {
                return "0" + x;
            }
            else
            {
                return x;
            }
        };

        
        };

       