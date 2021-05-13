
(function () {
   "use strict";



    for (let i = 1; i < 100; i+=2) {
        console.log(i);
        if (i === 27) {
            console.log('We have reached the stopping point: break!');

            break;

            console.log('You will never see this line.');
        }
    }

    }
)()