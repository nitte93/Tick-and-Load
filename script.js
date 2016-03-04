// Code goes here
$(document).ready(function(){
  
  function showLoader(widthDiff){
    console.log("every5sec", widthDiff);
    var timerId = setInterval(function(){    
      width= $(".loaderContent").width();
      console.log(width);
      if(width!=300){
        console.log("original ",width);
        width = width+widthDiff;
        console.log("updated ",width);
      $(".loaderContent").css("width", width);
      }else{
        clearInterval(timerId);
      }    }, 5000)

    }


function startCountDownTimer(duration) {//, display
    var timer = duration;
    var minutes;
    var seconds;
        console.log(timer, duration, minutes,seconds);
    setInterval(function () {
    console.log(timer, duration, minutes,seconds);
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        $("#time").html( minutes + ":" + seconds);// = minutes + ":" + seconds;
        //console.log(timer, duration, minutes,seconds);
        if (--timer < 0) {
            clearInterval(startCountDownTimer);
          
        }
    }, 1000);
}
// $("#startTimer").click(function(){
//   setInterval(function(){alert("hello");},2000);
// })
    $("#startTimer").click(function(){
        var timeValue = $("#timeInput").val();
        if(timeValidation(timeValue)){
          console.log("success");
          var arr = timeValue.split(':'); 

          // minutes are worth 60 seconds. Hours are worth 60 minutes.
          var seconds = (+arr[0]) * 60 * 60 + (+arr[1]) * 60 + (+arr[2]); 
                    var totalMilliSecs = seconds*1000;
                    var totalIteration = totalMilliSecs/5000;
                    var widthDiff = 300/totalIteration;
                startCountDownTimer(seconds);
                showLoader(widthDiff);            
  
        }else{
          alert("notvalidated");
        }
    })

function timeValidation(strTime) {
           var timeFormat = /^(?:2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]$/;
           return timeFormat.test(strTime);
}


});
