//create a prompt asking the user to input numbers seperated by commas
const userInput= prompt(`type in numbers that are seperated by a comma`);
//console.log(userInput)
//create a variable `userInput` that is the prompt string

//turn the `userInput` string into an array of individual strings
const userArray = userInput.split(`,`);
//console.log(userArray);

// create a variable named numbers that is an empty array
const numbers = [];
//console.log(numbers)

//convert the strings in the array into numbers
  //create a for loop that will iterate though each string in array
  for ( i = 0; i < userArray.length; i++){
        const stringNums = userArray[i];
        const nowNums= Number(stringNums);
        numbers.push(nowNums);
  }
  //console.log(numbers);
  //turn each string into a number
  //push the converted number to numbers array



//create a function called getLength
const getLength = (nums) => {
  const numsLength = nums.length;
  return numsLength;
}
//console.log(getLength(numbers));
  //function will iterate through the numbers of array
  //length will be determined with get length funtion 
  //return length
  //invoke function

  //create a function called getSum

const getSum = (nums) => {
    let sum = 0;
  for (let i = 0; i < nums.length; i++){
    const number = nums[i];
    sum += number;

   }
   return sum;
    
}
//console.log(getSum(numbers));

  //function will iterate thorough the numbers of array
  //numbered will be added together to get total sum
  // return sum
  //invoke function


//create a function called getMean
 const getMean = (nums) =>{
  const mean = getSum(nums) / getLength(nums);
    return mean;
} 
 //console.log(getMean(numbers));

  //function will take the getSum and divide it by the getLength
  //return mean
  //invoke function


//create a function called getMin
const getMin = (nums) => {
  let numMin = nums[0];
    for( let i=0; i < numbers.length; i++){
    if (nums[i]< numMin){
    numMin= nums[i];
      }
    } return numMin;
 }
//console.log(getMin(numbers));

  //function will iterate through the numbers of array
  //create a variable called numMin that equals the first number of array
  //go through each number
  //if current number is lower that numMin it becomes the new value
  //return numMin
  //invoke function


//create a function called getMax

const getMax = (nums) => {
  let numMax = nums[0];
    for( let i=0; i < numbers.length; i++){
    if (nums[i]> numMax){
    numMax= nums[i];
      }
    } return numMax;
 }
//console.log(getMax(numbers));

  //function will iterate through the numbers of array
  //create a variable named numMax that equals the first number of the array
  //go through each number 
  //if current number is higher than numMax it becomes the new value
  //return numMax
  //invoke function


//create a function called getRange 
const getRange = (nums) =>{
  range = getMax(nums) - getMin(nums);
  return range;
}
//console.log(getRange(numbers));
  //function will subract numMin from numMax
  //return range
  //invoke function


//create function getEvens 
const getEvens = (nums) =>{
  const evenNums =[];
  for (let i=0; i < nums.length; i++){
    if (nums[i] %2 == 0){
      evenNums.push(nums[i]);
    }
  }
return evenNums;
}
//console.log(getEvens(numbers));
  //function will iterate through the numbers of array
  //create a variable called evenNums that is set to []
  //go through each number to figure if they are even
    //if number is even it is pushed to evenNums array
  //return evenNums
  //invoke function

  //create function called getOdds 
  const getOdds = (nums) =>{
    const oddNums =[];
    for (let i=0; i < nums.length; i++){
      if (nums[i] %2 !== 0){
        oddNums.push(nums[i]);
      }
    }
  return oddNums;
  }
  //console.log(getOdds(numbers));
  //function will iterate through the numbers of the array
  //create a variable called oddNums thta is set to []
  //go through each number to figure if they are odd
    //if number is odd it is pushed to oddNums array
  //return oddNums

