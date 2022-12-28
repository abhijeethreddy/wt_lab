function quick_Sort(arr){
    if(arr.length<=1){
        return arr;
    }
    else{
        let newArray=[];
        let left=[];
        let right=[];
        let pivot=arr.pop();
        for(let i=0;i<arr.length;i++){
            if(arr[i]<=pivot){
                left.push(arr[i]);
            }
            else{
                right.push(arr[i]);
            }
        }
        return newArray.concat(quick_Sort(left),pivot,quick_Sort(right));
    }
}
let arr=[3,0,5,-1,4,1];
let newarr=quick_Sort(arr);
console.log(newarr);