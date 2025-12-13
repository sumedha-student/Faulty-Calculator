/*Create a faulty calculator using Js 
1.Two numbers as input
2.+ --> -
3.* --> +
4.- --> /
5./ --> **
6. It performs wrong operation 10% of the times
*/
let random = Math.random()
console.log(random)
let a = prompt("Enter first number")
let c = prompt("Enter  operation")
let b = prompt("Enter second number")
let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}
if (random > 0.1){
    //  alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
    if(c=="*"){
        alert(`The result is `+a*b);
    }
   let s=parseInt(a)+parseInt(b)
    if(c=="+"){
         alert(`The result is `+(s));
    }
    if(c=="-"){
        alert(`The result is `+a-b);
    }
    if(c=="/"){
        alert(`The result is `+a/b);
    }
}
else{
    // c=obj[c]//value of key c
    // alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
    if(c=="*"){
        alert(`The result is `+a+b);
    }
    if(c=="+"){
        alert("The result is ",a-b);
    }
    if(c=="-"){
        alert(`The result is `+a/b);
    }
    if(c=="/"){
        alert(`The result is `+a**b);
    }

}