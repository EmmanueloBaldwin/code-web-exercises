(function () {

    "use strict";
//
//         function isEven(number) {
//
//             return number % 2 === 0;
//         }
//         console.log(isEven(5))
// //isEven(4)
//         function isOdd(number) {
//
//             return number % 2 !== 0;
//}
//         function isTrue(input) {
//
//             return input === true;
//         }
//
//         console.log(isTrue(true))

    // function isFalse(input) {
    //     return  input === false;
    // }
    //   console.log(isFalse(false))

    //
    // function subtract(a , b) {
    //     if ((typeof a === "number" || !NaNa(a))
    //         && (typeof a === "number" || !NaNa(b)) ){
    //         return a - b;
    //     } else {
    //         return false
    //     }
//
//     function multiplyIfNumeric(input1, input2) {
//         var product = number(input1) * number(input2)
//         if(isNAN(product)) {
//
//             return false;
//         }else{
//
//             return product;
//         }
//     }
// console.log(multiplyIfNumeric(10, 2))


        / TODO: write a function called toUppercase which takes in one input and
        //  returns that input in uppercase IF (and only if) the input is a non-numeric string
        //  otherwise, return false



//     function upperCase(input) {
//             if (typeof input === 'string' && isNaN(input)) {
//                 return input.toUpperCase ()
//
//             }
//             return false;
//     }
// console.log(upperCase('cat'));

// TODO: write a function called stickyCaps which takes in an input and returns that input in sticky caps
//  ie: dog -> dOg, software developer -> sOfTwArE dEvElOpEr
//  -> You may be using a few different string methods
//  -> If the input is numeric or not a string, return false






         function stickyCaps (input) {
             let res = "";
             for (i=0; i < input.length; i++) {
                 res += i % 2 === 0 ? input.charAt(i).toUpperCase() : input.charAt(i);
             }
             return res;
 }

 let test = 'software developer';
                                                                                      





    })()