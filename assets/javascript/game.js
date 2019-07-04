

// Sets a random number between 19 and 120 to the score the user will attempt to get to.

// Game Variables 

// Update +1 on loss
var loss = 0;
// Updated +1 on win
var win = 0;
// User's Total Input from clicking food icons
var userFoodTotal = 0;


// 4  Random Values between 1 and 12 assigned to different variables.#
var apple = Math.floor(Math.random()*11) +1;
console.log(apple);

var banana = Math.floor(Math.random()*11) +1;
console.log(banana);

var steak = Math.floor(Math.random()*11) +1;
console.log(steak);

var cake =  Math.floor(Math.random()*11) +1;
console.log(cake);

var foodRequired = Math.floor(Math.random() * 101) +19;

function reset() {
    console.log(apple);
    var cake =  Math.floor(Math.random()*11) +1;
    console.log(cake);
    var steak = Math.floor(Math.random()*11) +1;
    console.log(steak);
    var banana = Math.floor(Math.random()*11) +1;
    console.log(banana);
    var apple = Math.floor(Math.random()*11) +1;
    console.log(apple);
    var foodRequired = Math.floor(Math.random() * 101) +19;
    $('#poop1').text(foodRequired);
    $('#totalFood').text(userFoodTotal);
    }

    reset(); 

    function winChecker() {
        if ( userFoodTotal === foodRequired) {
            win++;
            $("#wins").text(win);
            reset();
        } 
         else if( userFoodTotal > foodRequired) {
             loss++;
             $("#loses").text(loss);
             reset();
         }
      
        }
 

 // Increases users total by the random value assigned to apple

    $("#appleBox").on('click',function() {
       userFoodTotal = apple+userFoodTotal;
       $('#totalFood').text(userFoodTotal); 
    //   console.log(userFoodTotal)
        winChecker();
     });
// Increases users total by the random value assigned to banana
     $("#bananaBox").on('click',function() {
        userFoodTotal = banana+userFoodTotal;
        $('#totalFood').text(userFoodTotal); 
      //  console.log(userFoodTotal)
        winChecker();
      });
// Increases users total by the random value assigned to steak
      $("#steakBox").on('click',function() {
        userFoodTotal = steak+userFoodTotal;
        $('#totalFood').text(userFoodTotal); 
      //  console.log(userFoodTotal)
        winChecker()
      });
// Increases users total by the random vlaue assigned to cake
      $("#cakeBox").on('click',function() {
        userFoodTotal = cake+userFoodTotal;
        $('#totalFood').text(userFoodTotal); 
      //  console.log(userFoodTotal)
        winChecker()
      });

