let arr = [48,32,41,66,45,29,70,55,171];

let palindromeFunc = (arr)=>{
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