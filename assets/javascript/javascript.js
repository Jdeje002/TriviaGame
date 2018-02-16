
$(document).ready(function () {
    
    var rightAnswers = 0
    var wrongAnswers = 0
    var counter = 0
    var timer = select("#timer")
    timer.html('0');
    
    function initGame(){
        
        // timer
        function timeIt(){
            counter++;
            timer.html(counter)
        }
        setInterval (timeIt,1000)
        // click button to start timer 

        // show quiz

        // keep track of right answers

        // keep track of wrong answers

        // desplay correct answers


    }
  
  
  
    initGame()

})
