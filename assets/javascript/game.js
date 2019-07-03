

// Sets a random number between 19 and 120 to the score the user will attempt to get to.
    var foodRequired = Math.floor(Math.random() * 101) +19;
    $('#poop1').text(foodRequired); 
    
// Game Variables 


var loss = '';

var win = '';
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

 
 //    $("#appleBox").append(apple);

    $("#appleBox").on('click',function() {
       userFoodTotal = apple+userFoodTotal;
       $('#totalFood').text(userFoodTotal); 
     });



// 4 Foods each with a random number that will reset on win or loss condition
//$("#appleBox").on(click(function(){
   //userFoodTotal = (userFoodTotal + apple);
//})


/*
for(var i = 0; i < 4; i++) {
    var randomNumber = Math.floor(Math.random()*11) +1;
    console.log(randomNumber)

    var food = $("p");
    food.attr(randomNumber);

    $(".poop").append(food);

   // $(".poop").on("click", function() {
        

//}
}
   // $(".poop").text("hello");
  //   $(".poop").click("totalFood");

*/

   

// Reset
 /*function Reset () { 
     var foodRequired;
     var randomFoodValue;
     var totalFood = 0;
 }
*/



//
// Wins

// Losses




// When clicking a food item it should add its sum to the total score.

// If total score = Computer Input then increase wins+ and reset

// If total score > Computer Input than increase loss and reset
