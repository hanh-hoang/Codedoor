/*
Project Writing an email to your SO:
You met the person of your dreams and want to send SO an email writing about your last Summer and what you did. 
You want to make sure that your email does not contain any errors or sound stupid. 
Since you are a hacker, you decide to write a program that makes your email sound nice. 
Let a variable be summerTime and store your email text (with at least 100 words) in the variable. 
Let's split the string into individual words and save them in a new array called storySummer. 
You could use the .slice method. Find a way to scan your text for errors. 
You can look for APIs to third-party providers or write your own validation script. 
Implement it. Once you have set everything up write your email.
*/

const summerTime = "My dear honey I could not stop myself from writing this letter as I always wanted to tell you how much I love you. Many times words cannot express the feelings as much as letters can That is why I wanted to write and tell you about how much I care for you My love you have been my passion and remain to me my love all through my life I am so fortunate to meet you win your heart and occupy a special place in your life Your sparkling eyes are always filled with love and gratitude Your kindness generous attitude make a unique person in my life I always long to be in your arms and cuddle you I wish and pray that all our dreams of staying together should come true and we should live happily ever after Lots of love";

let storySummer = summerTime.split(" ");

// Validation function
