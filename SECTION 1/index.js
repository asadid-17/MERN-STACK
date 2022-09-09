console.log('hello javascript');
b = "some string";
console.log(b);
age = 30;
console.log(age)
console.log(typeof(age));
if(
    age >= 18
){
console.log('you are eligible');}
else{
    console.log('not eligible');
}

//  wap to check if a number is divisble by 7 and 11

  num = 200;
  if(
    num%5==0 && num%11==0
  ){
    console.log('its divisible');
    let x ="this should be local";
    const y="this should be local & constant";
  }
  else{
    console.log('not divisible');

}
num = 70;
if (num%7==0 && num%11==0 )
{
    console.log('its divisible by 7 and 11 ');
    
   
}else if ( num % 7 == 0 && !(num%11==0))
{
    console.log('its divisible by 7  but not by 11 ');
}
else if (! (num % 7 == 0) && num%11==0)
{
    console.log('its not divisible by 7  but devided by 11 ');
    
}
else {
    console.log('neither divisible by 7  nore by 11 ');

}

// console.log(x);
// console.log(y);

  



//  keywords 
