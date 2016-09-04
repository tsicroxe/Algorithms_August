/*Remove from array
Given array, and indices start and end,
remove vals in that index range,
working in-place (hence shortening the array).
Given ([20,30,40,50,60,70],2,4),
change to [20,30,70] and return it.*/

    function removeFromArray(arr, indexStart, indexEnd){
        if(indexStart > indexEnd){
            var temp = indexEnd;
            indexEnd = indexStart;
            indexStart = temp;
        }

        for(var i = indexEnd; i >= indexStart; i--){
            for(var j = i; j < arr.length; j++){
                arr[j] = arr[j+1];
            }
            arr.length -= 1;
        }
        console.log(arr);
    }

    var array = [1,2,3,4,5,6,7,8,9];
    removeFromArray(array, 3, 6);
