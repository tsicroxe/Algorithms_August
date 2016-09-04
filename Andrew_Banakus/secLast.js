/*Second-to-last
Return the second-to-last element of an array.
Given [42,true,4,"Liam",7], return "Liam".
If array is too short, return null.*/


    function sec_Last(arr){
        var result = [];
        for(var i = arr.length; i >= arr.length-2; i--){
            if(i < 0)
                result = null;
            else
                result = arr[i];
        }
        console.log(result);
    }


var randArr = [42,true,4,"Liam",7,9,12,"monkey"];
sec_Last(randArr);
