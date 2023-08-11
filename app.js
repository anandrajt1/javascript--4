// CONSOLE

// entry=prompt("enter the word")
// function pall(entry){
//     let length=entry.length
    
//     for(let i=0;i<length/2;i++){
//         if(entry[i]==entry[length-1-i]){
//            flag=1;   
//         }
//         else{
//             flag=2;
//             break;
//         }
//     }
//     if(flag==1){
//         console.log("its a palindrome")
//     }
//     else{
//         console.log("its not a palindrome")
//     }

// }
// pall(entry);

// USER




document.getElementById('btn').onclick=function(){
    var str="";
    var n=document.getElementById('inp').value.length;
    str=document.getElementById('inp').value;
    var temp=0;

    for(let i=0;i<n/2;i++){
        if(str[i]!=str[n-1-i]){
            temp=1
        }
    }

    if(temp==0){
        document.getElementById('result').innerHTML="its a palindrome"
    }
    else{
        document.getElementById('result').innerHTML="its not a palindrome"
    }

    document.getElementById('inp').value=""

}



