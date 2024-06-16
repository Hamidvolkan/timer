window.onload = function(){
    var seconds = 00;
    var tens = 00;
    var appendsec = document.getElementById("seconds");
    var appendtens = document.getElementById("tens");
    var startbtn = document.getElementById("start");
    var stopbtn= document.getElementById("stop");
    var resetbtn = document.getElementById("reset");
    var Interval ;


        startbtn.onclick = function(){
            clearInterval(Interval)
            Interval = setInterval(startTimer,10);
        }


        function startTimer() {
            tens ++;
            console.log(tens);
            if (tens <=9){
            appendtens.innerHTML = "0" + tens;  
            }
            if (tens > 9 ){
                appendtens.innerHTML = tens;

            }

            if (tens > 99 ){
                seconds++;
                console.log(seconds)
                appendsec.innerHTML = "0" + seconds;
                tens = 0;
                appendtens.innerHTML = "0" + 0;

                
            }       
            if (seconds > 9){
                appendsec.innerHTML = seconds;
              }
            
         }

         stopbtn.onclick = function(){
             clearInterval(Interval);
         }
        
        //  resetbtn.onclick = function(){
        //      clearInterval(Interval);
        //      tens = 00;
        //      seconds = 00
        //      appendsec.innerHTML = "0"+ 0 ;
        //      appendtens.innerHTML = "0" + 0;
        //  }

         resetbtn.onclick = function(){
            clearInterval(Interval);

            tens= 00;
            seconds = 00;
          
             appendsec.innerHTML = "0" + 0 ;
             appendtens.innerHTML = "0" + 0;
         }
    }

