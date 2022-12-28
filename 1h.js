let arr=[3, 0, 2, 5, -1, 4, 1];
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-i;j++){
        if(arr[j+1]<arr[j]){
            let temp=arr[j+1];
            arr[j+1]=arr[j];
            arr[j]=temp;
            // swap(arr[j],arr[j+1]);
        }
    }
}
console.log(arr);