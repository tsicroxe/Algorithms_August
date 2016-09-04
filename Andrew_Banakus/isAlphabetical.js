/*Nikki, a queen of gentle sarcasm, loves the word facetiously.
Lance helpfully points out that it is the only known English word
that contains all five vowels in alphabetical order, and it even
has a ‘y’ on the end! Nikki takes a break from debugging to turn
and give him an acid stare that could only be described as arsenious.
Given a string, return a boolean indicating whether all letters
contained in that string are in alphabetical order.*/

    function isAlphebetical(arr){
        for(var i = 0; i < arr.length-1; i++){
            if(arr[i] < arr[i+1]){
                console.log('alphabetical' + arr[i]);
            }
            else {
                console.log('not alphabetical');
                return false;
            }
        }
    }


    var array = 'facetiously';
    isAlphebetical(array);
    
