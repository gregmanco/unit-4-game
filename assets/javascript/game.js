

// Sets a random number between 19 and 120 to the score the user will attempt to get to.
    var foodRequired = Math.floor(Math.random() * 101) +19;
    $('#poop1').text(foodRequired); 
    
// Game Variables 


var loss = 0;

var win = 0;
// User's Total Input 
var userFoodTotal = 0;
console.log(foodRequired);


// 4  Random Values between 1 and 12 assigned to different variables.#
var apple = Math.floor(Math.random()*11) +1;
console.log(apple);

var banana = Math.floor(Math.random()*11) +1;
console.log(banana);

var steak = Math.floor(Math.random()*11) +1;
console.log(steak);

var cake =  Math.floor(Math.random()*11) +1;
console.log(cake);


function reset() {
    var cake =  Math.floor(Math.random()*11) +1;
    var steak = Math.floor(Math.random()*11) +1;
    var banana = Math.floor(Math.random()*11) +1;
    var apple = Math.floor(Math.random()*11) +1;
    var foodRequired = Math.floor(Math.random() * 101) +19;
    $('#poop1').text(foodRequired); 
    var userFoodTotal = 0;
    $('#totalFood').text(userFoodTotal);
    }

 
 // Increases users total by the random value assigned to apple

    $("#appleBox").on('click',function() {
       userFoodTotal = apple+userFoodTotal;
       $('#totalFood').text(userFoodTotal); 
       console.log(userFoodTotal)
     });
// Increases users total by the random value assigned to banana
     $("#bananaBox").on('click',function() {
        userFoodTotal = banana+userFoodTotal;
        $('#totalFood').text(userFoodTotal); 
        console.log(userFoodTotal)
      });
// Increases users total by the random value assigned to steak
      $("#steakBox").on('click',function() {
        userFoodTotal = steak+userFoodTotal;
        $('#totalFood').text(userFoodTotal); 
        console.log(userFoodTotal)
      });
// Increases users total by the random vlaue assigned to cake
      $("#cakeBox").on('click',function() {
        userFoodTotal = cake+userFoodTotal;
        $('#totalFood').text(userFoodTotal); 
        console.log(userFoodTotal)
      });




     /* if ( userFoodTotal == foodRequired) {
          win++;
          $("#wins").text(win);
          reset();
      }
      */
