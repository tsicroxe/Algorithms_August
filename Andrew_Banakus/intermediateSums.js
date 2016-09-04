/*Intermediate Sums
You will be given an array of numbers.
After every tenth element, add an additional element
containing the sum of those ten values.
If the array does not end aligned evenly with ten elements,
add one last sum that includes those last elements not yet
been included in one of the earlier sums.
Given the array [1,2,1,2,1,2,1,2,1,2,1,2,1,2],
change it to [1,2,1,2,1,2,1,2,1,2,15,1,2,1,2,6].*/

    function intermediateSums(arr){
        var sum = 0;
        var count = 0;
        for(var i= 0; i < arr.length; i++){
            if(count < 10) {
                sum += arr[i];
                //console.log('sum = ' + sum);
                count++;
                //console.log('count = ' + count);
            }
            else if(count === 10){
                for(var j = arr.length; j > i; j--){
                    //console.log(arr);
                    arr[j] = arr[j-1];
                }
                //console.log(arr);
                arr[i] = sum;
                //console.log(arr);
                count = 0;
                //console.log('count set back to 0' + count);
                sum = 0;
                //console.log('sum set back to 0' + count);
               // i++;
                //console.log('skipping one i to account for sum' + i);
                //console.log(arr);
            }
        }
        if(sum > 0)
            arr[arr.length] = sum;
        console.log(arr);
        return arr;
    }

    var array = [1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2];
    intermediateSums(array);
