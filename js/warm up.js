// function sum_Of_Cubes(n) {
//     var sumn = 0;
//
//     for (var i = 1; i <= n; i++) {
//         sumn += Math.pow(i, 3);
//     }
//     return sumn;
// }
//
// console.log(sum_Of_Cubes(3));
// console.log(sum_Of_Cubes(4));
//
// //make a number tree


function generatePyramid() {
    let totalNumberofRows = 10;
    let output = '';
    for (var i = 1; i <= totalNumberofRows; i++) {
        let j = i.toString ( )
        output += j.repeat(i)
        output += '\n'


        console.log(output);
    }
}
generatePyramid()