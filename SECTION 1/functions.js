/*function addNums(a,b) {
   
    var c = a+b;


    console.log(c)
    
/}

addNums(06,78);
// console.log(c);*/

 /*const prodNums = function(x,y) {
    console.log(x*y);
    
 }
 prodNums(4,5);

 const prodNums = function(x,y) {
    console.log(x*y);
    return x*y;
 }
 const res = prodNums(36,62);
 console.log(res);*/

 const sumProd = (a,b) => {
    const sum = a+b;
    const prod = a*b;
    return [sum,prod];
    
 }
 const [s,p] = sumProd(132,321);
 console.log(s,p);