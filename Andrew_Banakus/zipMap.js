/*Zip Arrays into Map
Associative arrays (Javascript objects)
are sometimes called maps because a key
(string) maps to a value. Given two arrays,
create an associative array (map) containing
keys of the first, and values of the second.
For arr1 = ["abc", 3, "yo"] and arr2 = [42, "wassup", true],
return {"abc": 42, 3: "wassup", "yo": true}.*/

    function zipMap(arr1, arr2){
        var map = {};
        if(arr1.length !== arr2.length){
            console.log('Unable to map, unequal arrays');
            return;
        }
        else {
            for(var i = 0; i < arr1.length; i++){
                map[arr1[i]] = arr2[i];
                console.log(i);
                console.log(map);
            }
        }
        console.log(map);
    }

    var arr1 = ["abc", 3, "y"];
    var arr2 = [42, "wassup", true];
    zipMap(arr1, arr2);
