let arr = [1,2,3,4,5,6,7];
let remove;
let rotateArr = function(k,arr){
    for(i=0; i < k; i++){
        remove = arr.shift();
        arr.push(remove);
    }
    return arr;
}

console.log(rotateArr(5,arr));