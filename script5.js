let arr = [23,121,563,22,675,535,135,11,34];

let palindromeFunc = function(arr){
let rev,temp,num;
let  palindromeArr = [];
    for(let i in arr){
        rev = 0;
        temp = arr[i];
       
    while(temp>0){
        num = temp%10;
        rev = rev*10 + num;
        temp = Math.floor(temp/10);
    }
    if(rev == arr[i]){
        palindromeArr.push(rev);
    }
    }
    return palindromeArr;
}
console.log("Palindrome Numbers: " +palindromeFunc(arr).join(" "));