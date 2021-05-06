function reverseString(str) {

    return str.split("").reverse().join("");
}
reverseString("hello");
console.log(reverseString('hello'))


      function getReverse(string){
          if (typeof string === "string" ){
              // return string.reverse
              return string.split("").reverse().join("");
          }else{
              return false;
          }
      }

function getSquare(input){
    if (input === null || isNaN(Number(input))){
        return false;
     }else{
        return (Math.pow(input , 2));
    }
}
  console.log(getSquare(2))



       function multiplySquares(input1, input2){
    if (input1 === null || input2 === null || isNaN(Number(input1)) || isNaN(input2)){
        return false;
     }else{
        return (Math.pow(input2 , 2) * Math.pow(input1, 2)  );
    }
}
  console.log(multiplySquares('cat' , 2))


function addTo(input) {
    input parseInt()
    return input;

}