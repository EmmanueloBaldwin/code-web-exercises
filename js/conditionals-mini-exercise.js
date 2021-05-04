(function () {
    "use strict";


        function getToDestination(age, isInsured, hasCar){
            var isLicensed = age >= 16;
            var isLegalDriver = isLicensed && isInsured;
           if (isLegalDriver && hasCar){
               console.log("Let's get in and go!");
           } else if(!isLegalDriver && rideShareAvailable()){
               console.log("Let's call a rideshare!");
           } else{
               console.log("I think my friend can give us a lift!");
           }
       }


            function rideShareAvailable( ) {

                let location = confirm ( "Is this a big city?" );
                let cost = confirm ( "Do you have more than 20.00?" );

                let timeOfDay = confirm ( "Is it before 1am?" );
                let age = confirm ( "Are you over the age of 16?" );


                if (location && cost && timeOfDay && age) {
                    console.log ( "An uber is availiable for you to book!" );
                    return true;
                } else {
                    console.log ( "You will not be able to book an Uber!" );
                }

                return false;
            }


        getToDestination(17, true, true);















    }
)()