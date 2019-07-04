// Sets a random number between 19 and 120 to the score the user will attempt to get to.

// Game Variables 

// Update +1 on loss
var loss = 0;
// Updated +1 on win
var win = 0;
// User's Total Input from clicking food icons
var userFoodTotal = 0;
var foodRequired = 0;

var foods = {
  cake: { name: "cake", value: 0 },
  steak: { name: "steak", value: 0 },
  banana: { name: "banana", value: 0 },
  sushi: { name: "sushi", value: 0 }
};


// 4  Random Values between 1 and 12 assigned to different variables.#
var getRandomValue = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
// var apple = Math.floor(Math.random()*11) +1;
// console.log(apple);

// var banana = Math.floor(Math.random()*11) +1;
// console.log(banana);

// var steak = Math.floor(Math.random()*11) +1;
// console.log(steak);

// var cake =  Math.floor(Math.random()*11) +1;
// console.log(cake);

// var foodRequired = Math.floor(Math.random() * 101) +19;

function reset() {
  userFoodTotal = 0;
  foodRequired = getRandomValue(19, 120);
  foods.sushi.value = getRandomValue(1, 12);
  console.log(foods.sushi.value);
  foods.banana.value = getRandomValue(1, 12);
  console.log(foods.banana.value);
  foods.steak.value = getRandomValue(1, 12);
  console.log(foods.steak.value);
  foods.cake.value = getRandomValue(1, 12);
  console.log(foods.cake.value);
 
  

  $('#poop1').text(foodRequired);
  $('#totalFood').text(userFoodTotal);
}

function winChecker() {
  if (userFoodTotal === foodRequired) {
    win++;
    $("#wins").text(win);
    reset();
  }
  else if (userFoodTotal > foodRequired) {
    loss++;
    $("#loses").text(loss);
    reset();
  }
}

var addFoods = function(food) {
  userFoodTotal += food.value;
  $("#totalFood").text(userFoodTotal);
  winChecker();
}

reset();
// Increases users total by the random value assigned to apple

$("#sushiBox").on('click', function () {
  addFoods(foods.sushi)
});
// Increases users total by the random value assigned to banana
$("#bananaBox").on('click', function () {
  addFoods(foods.banana)

});
// Increases users total by the random value assigned to steak
$("#steakBox").on('click', function () {
  addFoods(foods.steak)

});
// Increases users total by the random vlaue assigned to cake
$("#cakeBox").on('click', function () {
  addFoods(foods.cake)

});
