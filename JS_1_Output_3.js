/*
Project Try Combinator:
1,000 people are invited to an interview. 
You have been hired to write a program that will register startups for the interview and to give them instructions on interview day. 
Create a variable that indicates whether a startup team is from the US or not. It should result in a Boolean. 
Create a variable that indicates if there are developers on the founder's team. 
It should also result in a Boolean. 

Create a control flow statement that checks whether the startup is from the US and has at least a technical founder. 
If both Booleans are true, please generate a random number using math.floor() method between 1 and 500. 

If the team is not from the US, please generate a random number between 501 and 1000. 

If the number is between 1 and 100 assign Monday as the Interview day, 101 to 201 Tuesday until the days are full, etc. 
Please use min, max, and ceil. Iterate through all numbers and calculate the square root of each number. 
If the square root of the number is a prime number, save the number to a list with the variable accepted. 
For all others save them to a variable called denied. Push your code to GitHub.
*/

var USStartUp = new Boolean(true);
var technicalFounder = new Boolean(true);
let num;
let interviewDay;

if (USStartUp && technicalFounder){
  num = getRndInteger(1, 500);
} else if (USStartUp == false){
  num = getRndInteger(501, 1000);
}

if (1 <= num <= 100){
  interviewDay = "Monday";
} else if (101 <= num <= 200){
  interviewDay = "Tuesday";
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
