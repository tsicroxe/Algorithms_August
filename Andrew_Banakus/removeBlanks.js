/*Create a function that, given a string,
returns a string without blanks.
Given " play that Funky Music ", returns a string
containing "playthatFunkyMusic".*/

    function removeBlanks(arr){
        var newArr = '';
        for(var i = 0; i < arr.length; i++){
            if(arr[i] === ' ')
                continue;
            else if(arr[i] !== ' ')
                // console.log(arr[i]);
                newArr += arr[i];
        }
        console.log(newArr);
        return newArr;
    }

    var string = " play that     Funky Music ";
    removeBlanks(string);
