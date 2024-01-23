let input = document.querySelector(".input");
let clearButton = document.querySelector(".clear");
let equalsButton = document.querySelector(".equals");
let result = document.querySelector(".result");

// task 1: create a function called calculateDoggieAge with a parameter called humanAge
function calculateDoggieAge(humanAge) {

  // task 2: declare a doggieAge variable and set it equal to the humanAge parameter multiplied by 7
    let doggieAge = humanAge*7;
  

  // task 3: print the doggieAge variable to the result div. Put it in string interpolation to have a message that reads "You doggie is _________ years old in human years!"

result.innerHTML = `Your doggie is ${doggieAge} years old in human years!`;
    
}



equalsButton.onclick = function() {

  // task 4: declare a userInput variable and set it equal to the value of the input. This needs to be a number, not a string! Be sure to place that inside our Number() method!
  let userInput = input.value;

    
  // task 5: call the calculateDoggieAge function. Be sure to include the userInput variable as the parameter!

calculateDoggieAge(userInput);
    
};



//Do Not Touch This Code
clearButton.onclick = function() {
  input.value = "";
  result.innerHTML = "";

};
