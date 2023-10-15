let arr = [23,12,76,34,98,54];
let sum = 0;

let oddNums = (arr) => {
    for( var i in arr){
        sum = sum + arr[i];
     }
     return "Sum of the Numbers: "+sum;
}

console.log(oddNums(arr));