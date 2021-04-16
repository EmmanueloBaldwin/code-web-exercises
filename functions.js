"Use Strict"



// creating an interface for other code to use without knowing what happens inside add()
//parameter goes inside the function

function add(num1, num2){// <- parameter here
    return num1 + num2;
}
console.log("The result of add() is: " + add( num1:5, num2:6)); // arguement
// do not forget to use the word return it is a void function not giving any thing back.


//Returns the difference of subtracting num2 fro m num 1

function subtract(num1, num2){
    return num1 - num2:
}
console.log("The result of subtraction() is: " + subtract(num1:10, num2:2))

// MINI EXERCISE
// TODO: Create functions which will return the product (*) of two numbers and the dividend (/) of two numbers, respectively

function multiplication(num1, num2){
    return num1 * num2:
}
console.log("The result of multiplication() is: " + multiplication(num1:10, num2:2))


function division(num1, num2){
    return num1 / num2:
}
console.log("The result of division() is: " + division(num1:10, num2:2))




function addWithDefaults(num1 : number = 0, num2: number = 0){
    return num1 + num2
}
console.log(addWithDefaults(2));

//scopping

{
    {
        {

        }
    }
}

//each code block is a scope
//cannot manipulate the function outside of the scope
