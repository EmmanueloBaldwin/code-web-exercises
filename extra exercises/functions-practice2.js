





        
        function stickyCaps (input) {
            let res = "";
            for (i=0; i < input.length; i++) {
                res += i % 2 === 0 ? input.charAt(i).toUpperCase() : input.charAt(i);
            }
            return res;
        }



        console.log(stickyCaps("software developer"));



