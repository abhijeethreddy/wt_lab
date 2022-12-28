let readline=require('readline');
let RL=readline.createInterface(process.stdin,process.stdout);
RL.question('Please Enter Text: ',(name)=>{
    let x=name;
    let y="";
    for(let i=0;i<x.length;i++){
        let c=x.charAt(i);
        if(c>='A' && c<='Z'){
            y=y+c.toLowerCase();
        }
        else{
            y=y+c.toUpperCase();
        }
    }
    console.log(`Output is ${y}`)
});
