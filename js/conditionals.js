(function () {
        "use strict";


        // function getToDestination(age, isInsured, hasCar){
        //     var isLicensed = age >= 16;
        //     var isLegalDriver = isLicensed && isInsured;
        //     if (isLegalDriver && hasCar){
        //         console.log("Let's get in and go!");
        //     } else if(!isLegalDriver && rideShareAvailable()){
        //         console.log("Let's call a rideshare!");
        //     } else{
        //         console.log("I think my friend can give us a lift!");
        //     }
        // }
        //
        //
        // function rideShareAvailable( ) {
        //
        //     let location = confirm ( "Is this a big city?" );
        //     let cost = confirm ( "Do you have more than 20.00?" );
        //
        //     let timeOfDay = confirm ( "Is it before 1am?" );
        //     let age = confirm ( "Are you over the age of 16?" );
        //
        //
        //     if (location && cost && timeOfDay && age) {
        //         console.log ( "An uber is availiable for you to book!" );
        //         return true;
        //     } else {
        //         console.log ( "You will not be able to book an Uber!" );
        //     }
        //
        //     return false;
        // }
        //
        //
        // getToDestination(17, true, true);



        /* ########################################################################## */

        /**
         * TODO:
         * Create a function named `analyzeColor` that accepts a string that is a color
         * name as input. This function should return a message that related to that
         * color. Only worry about the colors defined below, if the color passed is not
         * one of the ones defined below, return a message that says so
         *
         *
         * Example:
         *  > analyzeColor('blue') // returns "blue is the color of the sky"
         *  > analyzeColor('red') // returns "Strawberries are red"
         *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
         *
         * You should use an if-else-if-else block to return different messages.
         *
         * Test your function by passing various string literals to it and
         * console.logging the function's return value
         */

        function analyzeColor(,color1, color2, color3){
            let color1 = red
            let color2 = blue
            let color3 = cyan
                if (color1){
                console.log("Strawberries are red");
                if (color2)
                    console.log("blue is the color of the sky");
                    if (color3){
                        console.log("I don't know anything about cyan");
            } else{
                console.log("You did not pick any of my favorite colors!");
            }
        }
console.log(analyzeColor(blue));
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)

        function analyzeColor(color, randomcolor) {
                    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
                    var randomColor = colors[Math.floor ( Math.random () * colors.length )];
            if (colors){
                console.log("You picked one of my colors");
                if (randomColor){
                    console.log("You have generated a radom color);
                } else{
                    console.log("You did not pick any of my favorite colors!");
                }
            }
        /**
         * TODO:
         * Pass the `randomColor` variable to your function and console.log the results.
         * You should see a different message every time you refresh the page
         */

        /**
         * TODO:
         * Refactor your above function to use a switch-case statement
         */
        var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
            var randomColor = colors[Math.floor ( Math.random () * colors.length )];
            function anaylizeColor(colors, randomColor) {
                switch(colors) {
                    case 'red' :
                        System.out.println("Excellent you picked red");
                        break;
                    case 'Blues' :
                        System.out.println("Excellent you picked blue");
                        break;
                    case 'orange' :
                        System.out.println("Excellent you picked orange");
                        break;
                    case 'Yellow' :
                        System.out.println("Excellent you picked yellow");
                        break;
                    case 'Green' :
                        System.out.println("Excellent you picked Green");
                        break;
                    case 'Indigo' :
                        System.out.println("Excellent you picked Indigo");
                        break;
                    case 'Violet' :
                        System.out.println("Excellent you picked Violet");
                        break;
                        System.out.println("Better try again");
                        break;
                    default :
                        System.out.println("Invalid color");
                }
                System.out.println("Your your color is");
            }
        }

                    /**
         * TODO:
         * Prompt the user for a color when the page loads, and pass the input from the
         * user to your `analyzeColor` function. Alert the return value from your
         * function to show it to the user.
         */

                    function analyzeColor(color, randomcolor) {
                        alert("pick a color");

                        var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
                        var randomColor = colors[Math.floor ( Math.random () * colors.length )];
                        console.log("alert")
                        if (colors){
                            console.log("You picked one of my colors");
                            if (randomColor){
                                console.log("You have generated a radom color);
                            } else{
                                console.log("You did not pick any of my favorite colors!");
                            }
                        }

        /* ########################################################################## */

        /**
         * TODO:
         * Suppose there's a promotion in Walmart, each customer is given a randomly
         * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
         * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
         * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
         * all for free!.
         *
         * Write a function named `calculateTotal` that accepts a lucky number and total
         * amount, and returns the discounted price.
         *
         * Example:
         * calculateTotal(0, 100) // returns 100
         * calculateTotal(4, 100) // returns 50
         * calculateTotal(5, 100) // returns 0

         * Test your function by passing it various values and checking for the expected
         * return value.
         */
function calculateTotal(luckyNumber, total) {
            return luckyNumber * total;
        }
console.log(calculateTotal())
        /**
         * TODO:
         * Uncomment the line below to generate a random number between 0 and 6.
         * Prompt the user for their total bill, then use your `calculateTotal` function
         * and alerts to display to the user what their lucky number was, what their
         * price before the discount was, and what their price after the discount is.
         */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

        /**
         * TODO:
         * Write some JavaScript that uses a `confirm` dialog to ask the user if they
         * would like to enter a number. If they click 'Ok', prompt the user for a
         * number, then use 3 separate alerts to tell the user:
         *
         * - whether the number is even or odd
         * - what the number plus 100 is
         * - if the number is negative or positive
         *
         * if what the user enters is not a number, use an alert to tell them that, and
         * do *not* display any of the above information.
         *
         * Can you refactor your code to use functions?
         * HINT: The way we prompt for a value could be improved
         */











    }
)()