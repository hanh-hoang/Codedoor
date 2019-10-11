/* Project: Secret Message:
You have been hired by the CIA to send a secret message to an agent in Germany. 
For this, you are asked to transform an array of strings into a secret message: "The dog will eat a German bratwurst" 
Please create an array with each of the words as separate strings. 
Please use the variable ciaMessage and look up how the .pop method works. 
Remove the last element from the message array using .pop. 
Use the .push method to add the words breakfast and Munich as separate strings to the end of the array. 
Log the current array to the terminal to see if you have added the words. 
Change the word 'dog' to the word 'minister' by accessing the index and replacing it. 
Use the array method .shift remove the first word in the array. 
Use the .unshift method to add the word 'Prime'. 
Use the .splice() method to remove the words 'in', 'Munich' and replace it with the words 'at', 'the', 'oval', 'office'. 
Use the method .join to log the sentence to the console. 
Take the array and calculate the length of the array. 
Write a function using min and max to generate random numbers and add them to the array. 
Push your code to GitHub.
*/

var ciaMessage = ["The", "dog", "will", "eat", "a", "German", "bratwurst"];
console.log(typeof(ciaMessage));
//Remove the last element from the message array using .pop.
ciaMessage.pop()
//Use the .push method to add the words breakfast and Munich as separate strings to the end of the array.
ciaMessage.push("breakfast", "Munich")
//Log the current array to the terminal to see if you have added the words. 
console.log(ciaMessage)
//Change the word 'dog' to the word 'minister' by accessing the index and replacing it. 
ciaMessage[1] = "minister"
//Use the array method .shift remove the first word in the array. 
ciaMessage.shift()
//Use the .unshift method to add the word 'Prime'. 
ciaMessage.unshift("Prime")
//Use the .splice() method to remove the words 'in', 'Munich' and replace it with the words 'at', 'the', 'oval', 'office'. 
ciaMessage.splice(7, 1, 'at', 'the', 'oval', 'office')
//Use the method .join to log the sentence to the console. 
console.log(ciaMessage.join(" "));
//Take the array and calculate the length of the array. 
ciaMessage.length
//Write a function using min and max to generate random numbers and add them to the array. 
function getRandomInt(min, max) {
    debugger;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let num = getRandomInt(1, 100);
ciaMessage.push(num);


