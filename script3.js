let arr = [1,12,7,13,24,68,41,11];
let primeNum = [];

let primefunc = function(){
for(let i in arr){
   let j = 2;
   let count = 0;
   while(j<=arr[i]){
   if(arr[i]%j == 0){
    count++;
   }
  j++;
}
if(count == 1){
    primeNum.push(arr[i]);
}
}
return "Prime Numbers are " + primeNum;
}
console.log(primefunc(primeNum));
