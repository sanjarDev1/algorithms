// const check = (num1, num2)=>
// (
//     num1 === 100 || num1 + num2 === 100 || num2 === 100
// )


// console.log(check(100,89));
// console.log(check(20,80));
// console.log(check(100,100));
// console.log(check(10,50));


// -------------------------------


// const check = str=>str.slice(str.lastIndexOf('.'))

// console.log(check("style.css"));
// console.log(check("style.jsx"));
// console.log(check("style.js"));


// --------------------------------
//  65-90  97-122

// const chekc = (str,c )=> {
//     let res="";
//     str.split("").map((value)=>{
//         if((value.charCodeAt() >=65 && value.charCodeAt()<=90)||(value.charCodeAt() >= 97 && value.charCodeAt()<=122) ) {
//             res+=value;
//         }  
//         else{
//             res+=c;
//         }
//     })
//     return res;
// }

// console.log(chekc("sdfgdsf656565!@#$%^&*(","!"));


// const alpha = str =>{
//      return str.split("").map(value=>
//         String.fromCharCode(value.charCodeAt(0)+1)
//         ).join("");
//     }
// console.log(alpha("salom"));


