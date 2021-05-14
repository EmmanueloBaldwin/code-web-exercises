(function () {
    "use strict";

for (let i = 0; i < 5; i++) {
    console.log('loop' + i);
}


function showMultiplicationTable() {
    for (let i = 1; i <= 12; i++) {
        const result = i * 2;
        console.log ( `${2} * ${i} = ${result}` );
    }
}


for (let i=0; i<=10; i++) {
    if (i === 0) {
        console.log(i +  " is even");
    }
    else if (i % 2 === 0) {
        console.log(i + " is even");
    }
    else {
        console.log(i + " is odd");
    }
}

        function generatePyramid() {
            let totalNumberofRows = 9;
            let output = '';
            let (var i = 1; i <= totalNumberofRows; i++) {
                for (var j = 1; j <= i; j++) {
                    output += j + '  ';
                }
                console.log(output);
                output = '';
            }
        }



        for(let i = 100; i >= 0; i -= 5) {
    console.log('loop' + i);
}

}
)()