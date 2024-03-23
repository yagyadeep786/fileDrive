
const generateRandomString= (num=6)=>{

    var charectors= "abcdefghijklmopqrstuvwxyzABCDEFGHIJKLMNOPWRSTUVWXYZ1234567890";
   var str="";
    for(let i=1;i<=num;i++){
        let randomNum= parseInt(Math.random()*charectors.length);
        console.log(randomNum);
         str+= charectors[randomNum];
    }
    return str;
}

export default generateRandomString;