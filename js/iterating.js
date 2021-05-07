(function () {

        "use strict";

        /**
         * TODO:
         * Create an array of 4 people's names and store it in a variable called
         * 'names'.
         */
let name = ["Sena" , "Tiffany" , "Jazmine" , "Toawana"]

        /**
         * TODO:
         * Create a log statement that will log the number of elements in the names
         * array.
         */
        console.log(name.length);
            /**
             * TODO:
             * Create log statements that will print each of the names individually by
             * accessing each element's index.
             */
            let names = ["Sena" , "Tiffany" , "Jazmine" , "Toawana"]
                colors.forEach(function(name) {
                    console.log ( name )
                })
            /**
         * TODO:
         * Write some code that uses a for loop to log every item in the names
         * array.
         */
            let names = ["Sena" , "Tiffany" , "Jazmine" , "Toawana"]

                for(let i = 0; i < names.length; i++) {
                    console.log(names[i]);
        }
        /**
         * TODO:
         * Refactor your above code to use a `forEach` loop
         */
            let names = ["Sena" , "Tiffany" , "Jazmine" , "Toawana"]
                let newNames = [];

                names.forEach(item => {
                    newNames.push(item * 2);
        })

        console.log(newNames);
        /**
         * TODO:
         * Create the following three functions, each will accept an array and
         * return an an element from it
         * - first: returns the first item in the array
         * - second: returns the second item in the array
         * - last: returns the last item in the array
         *
         * Example:
         *  > first([1, 2, 3, 4, 5]) // returns 1
         *  > second([1, 2, 3, 4, 5]) // returns 2
         *  > last([1, 2, 3, 4, 5]) // return 5
         */

// TODO: MINI-EXERCISE
//  -> var days = ["Monday", "Tuesday", "Wednesday"];
//  -> Create an array with the remaining days of the week
//  -> Call .forEach() on that NEW array
//  -> Inside the inline function you pass into .forEach():
//      -> add the remainingDay of the week to the old array
//  -> When the loop completes, console.log() the completed day of the week array

        var days = ["Monday", "Tuesday", "Wednesday"];
        days.forEach(function(shape) {
            console.log('Here is a lovely shape: ' + shape + '.');
        });
    }
)()
