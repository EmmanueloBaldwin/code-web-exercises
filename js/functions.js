(function () {
    "use strict";


    function sayhellow(name){
        return "Hello " + name;
    }

   var hellomessage = sayhellow("Emmanuel")

console.log(hellomessage)

    var myname = sayhellow("Emmanuel")
      function sayhellow(name) {
          return "Hello " + name;
      }
      //Don't modify the following line, it generates a random number between 1 and 3
      // and stores it in a variable named random
      var random = Math.floor((Math.random() * 3) + 1);



    function isTwo(num){
        if (num == 2 ){
         return true;
        }  else {
            return  false;
        }
         }

       console.log(isTwo(random))


    function calculateTip(tip, total){
       return total * tip
    }
    function displaytipammount(tip, total) {
        total = prompt("bill total")
        tip = prompt("input total tip in decimal number")
        alert("your tip amount is" + calculateTip(tip, total ))

    }
   displaytipammount();

    function applyDiscount( price, percentage) {
       let discontedPrice = price * percentage;
       return price - discontedPrice;
       console.log(applyDiscount(45.99 - .12));
        

    }

         





})();

