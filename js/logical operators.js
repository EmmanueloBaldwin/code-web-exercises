"Use strict";

// I want a routine to determine if a dog is infact my dog
// The dog must have fur,  have whisker, and have a name

var hasfur = true;
var hasWhiskers = true;
var nameIsCoda = true;

if (hasfur && hasWhiskers && nameIsCoda){
    console.log("Who's A ggod girl?? *bark*");
}
//another way


isMyDog = (hasfur && hasWhiskers && nameIsCoda);
if (isMyDog){
    console.log("Who's A ggod girl?? *bark*");
}


//logical or

var creditScore = 720;
var cashOnHand = 3000

if (creditScore > 680 || cashOnHand > 3000){
    console.log("Congrats! you (the bank) now own a car!");

}
var hasRequiredScoreOrCash = (creditScore > 680) || (cashOnHand > 3000);
var lengthOfEmployment = 6
var hasAdequatelengthofEmployment = (lengthOfEmployment>= 6);
if (hasRequiredScoreOrCash && hasAdequatelengthofEmployment){
    console.log("ok, for real. you get a car");
    console.log("The inverted value is: " + !true);

//logical  not (!)
    // ******* Truthy / Falsy *******
// This is an intriguing concept in Javascript, and unique to it and Python
// Essentially, all values are considered 'true' unless they are defined as not
// Weird, right? So, all values except:
// false, 0, -0, 0n, "", null, undefined, and NaN (Not a Number
