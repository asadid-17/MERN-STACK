// check if a number is prime 

num= 17;
for ( i = 2; i <num ; i++){

   if (num%i==0 ){
      console.log(num+ ' is  not prime')
      break;
      
   }
   else{
      console.log( num+  ' is prime')
      break;
   }
}

// square all the number and store in new array
let newarr=[];
let result;
let arr = [4,5,7,2,8]
for( i=0 ;i<arr.length ; i++){
   result =  arr[i]*arr[i];
   newarr.push(result);
   
}
console.log(newarr);

// wap  to finf perfect square upto 100
let persqr;
for ( i=2; i<=10 ; i++)
{
    persqr =  i*i;
    console.log(persqr);
}

//  filter all even number and store in new array 

let arr1 = [3,4,5,6,7,8];
let result1 = [];
for(i=0;i<arr1.length;i++){
   if(arr1[i]%2==0){
      result1.push(arr1[i])
   }
}
console.log(result1);

//  fibonacci series( current number is a sum of last two numner)
 let num1 = 0;
 let num2 = 1;
 let next = 0;
for ( i= 1; i <10 ; i++){
console.log(num1+num2);
next = num1+num2;
num1=num2;
num2=next;
}

//   map and filter 

