let arr = [3,56,23,8,45,12,90];
let sum = 0;

let oddNums = function(arr){
    for( var i in arr){
        sum = sum + arr[i];
     }
     return "Sum of the Numbers: "+sum;
}

console.log(oddNums(arr));