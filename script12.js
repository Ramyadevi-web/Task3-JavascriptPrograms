let arr = [23,56,11,17,26,79,31,42];
let primeNum = [];

let primefunc = () => {
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
