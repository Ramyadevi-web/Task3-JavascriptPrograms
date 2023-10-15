let arr = [2,12,5,76,34,13];
let oddArr=[];
let odd = (arr) => {

for(var i = 0; i < arr.length;i++){
    if(arr[i]%2 != 0){
        oddArr.push(arr[i]);
    }
}
return oddArr;
}

console.log(odd(arr));