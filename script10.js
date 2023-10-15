let str = "guvi learning is aweSOMe";

let titlecaps = (str) => {
    let capsstring;
    let temp = [];
    let splitstring = str.split(" ");
for(let i in splitstring){
    capsstring = splitstring[i].charAt(0).toUpperCase() + splitstring[i].slice(1).toLowerCase();
    temp.push(capsstring);
}
return temp;
}
 console.log(titlecaps(str).join(" "));
