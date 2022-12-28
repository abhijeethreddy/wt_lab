function removeDuplicates(num) {    
    len=num.length;
    uniqueChars=[];   
    
    num.forEach((c) => {
        if (!uniqueChars.includes(c)) {
            uniqueChars.push(c);
        }
    });
return uniqueChars;
}
let Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
result = removeDuplicates(Mynum);
console.log("Original List:   "+Mynum);
console.log("Unique List:    "+result);
