let arr = [23,67,2,34,2,68,34,68,31,4];
let i;
let j;
let count;
let resArr = [];

let removeDuplicate = function(){
    console.log(arr)
    return arr.filter((item, 
        index) => arr.indexOf(item) != index); 
//     console.log(arr);
// for(let i=0; i < arr.length;i++){
//     j = i + 1;
//     count = 1;
//     while(j < arr.length){
//         if(arr[i] == arr[j]){
//           count++;
//         }
//         if(count>1){
//             console.log(arr[i],arr[j]);
//             break;
//         }
//         j++;
//     }
//     console.log(count);
//     if(count == 1){
//         resArr.push(arr[i]);
//     }
// }
// console.log(arr)
// return resArr;
}

console.log(removeDuplicate(arr));