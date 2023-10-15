let arr1 = [1,3,2,24];
let arr2 = [44,28,64,32];

let median = function(arr1,arr2){
let sortedarr = (arr1.concat(arr2)).sort((a, b) => a - b);
let arrlength = Math.floor(sortedarr.length/2);
let midele;

 midele = (sortedarr[arrlength]+sortedarr[arrlength-1])/2;
 return midele;
}


console.log(median(arr1,arr2));