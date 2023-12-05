# Employee Password Generator

## Description

In this project, I created password generator for employees to use in order to create a password that they will be able to use for their accounts. 
This generator gives the employee the option to select whether or not they would like uppercase, lowercase, special, or numeric characters. 


The goal is writing code in Javascript to run a function that would run a loop following the number of characters and criteria selected. 

After clicking generate password, prompts will pop up asking what the password should contain. 

The first prompt asking how many characters that the password should include, is being converted in to a number using the parseInt function. This is then validated through an if function, saying if it is not a number (isNAN), less than 8, or more than 128, then alert the user and return false. 

The following confirmations are saying if any questions are answered true, then concatenate the respective string and return true.

After this is concatenated into one string, the function generatePassword will then randomize the string placing a letter in randomPassword. This will then loop for each letter the amount of times the user selected for number of characters.

This password is then listed and written in the DOM. 

Challenge?
The biggest challenge was not knowing where to start with this code. I knew that I needed a writePassword function but that was about it. 

I learned that its very important to break everything down. The easiest way that I did this was map this out on a piece of paper. From here I could easily determine what I needed to include throughout the code. 

