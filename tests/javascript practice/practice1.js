//Practice Questions 
//find even number array

let num = [1,2,3,4,5,6];
let newArr= [];
for (i=1; i<=num.length; i++){
    if (num[i]%2===0){
        newArr.push(num[i]);
    }
}
console.log(newArr);
//output:[2,4,6]
// find maximum of two
let arr = [20,40];
console.log(Math.max(...arr));

//OR

let ele = [20,40,60];
let max = ele[0];
for (i=1; i<ele.length; i++){
    if (ele[i]>max){
        max = ele[i];
    }
}
console.log(max);

//OR using if else
let element = [40,60,20];
let newEle=element[0];
for (i=1; i<element.length; i++){
    if(element[i]>newEle){
        newEle = element[i];
    }else{
        console.log("Smaller Number");
    } 
    }
console.log("Max Num is", newEle);

//voting eligibility

let age= 27;
if (age>18){
    console.log("Eligible for voting");
}else {
    console.log("Not Eligible");
}

// leap year not 
let year = 2024;
if(year%4===0){
    console.log("Leap year");
}else{
    console.log("Not Leap Year");
}

//Grade System:
let marks = 78;
 if (marks>=90){
    console.log("A");
 } else if (75<=marks && marks<=89){
    console.log("B");
 } else if(50<=marks && marks<=74){
    console.log("C");
 } else if (marks<50) {
    console.log("Fail");
 }

 // loop practice:
 //For loop:
 for (let y=1; y<=10; y++){
    console.log(y);
 }
 // While loop:
 let a=1;
 {while (a<=10){
    console.log(a);
 a++;
 } }

 //Do while loop:

 let b=1;
 do{ console.log(b);
    b++;
 }while(b<=10);

 // Printing reverse no.
 // for loop 
 for (c=10; c>=1; c--){
    console.log(c);
 }

 // while loop
 let d=10;
 {while (d>=1){console.log(d);
    d--;
 }}

 // do while loop

 let e=10;
 do{console.log(e);
    e--;
 }while(e>=1);

 //print even  numbers from 1 to 20

 let f=2;
 for (let f=1; f<=20; f++){
    if (f%2===0){
        console.log(f);}
 }

 // print odd no. from1 to 20
 let g=1;
 for (let g=1; g<=20; g++){
    if (g%2===1){
        console.log(g);}
 }

 //Tbale for 5

 let h=1;
 for (h=1; h<=10; h++){
    console.log(h*5);
 }

//sum of 1 to 10

let l=1;
let addition=0;
for (l=1; l<=10; l++){
addition= addition + l;
}
console.log(addition);

//Find Factorial of Number

let factorial = 1;

for(let m = 1; m <= 5; m++){
    factorial = factorial * m;
}

console.log(factorial);

//revese number 1234:
function reverseNum(abcd) {
    return abcd.toString().split('').reverse().join('');
}
console.log(reverseNum(1234));

//count degits in the number

let countNum=12345;

let count = countNum.toString().length;
console.log(count);

//Print Fibonacci series (first 10 terms)
//0 1 1 2 3 5 8 ...
let n1= 0;
let n2= 1;
console.log(n1);
console.log(n2);
for(o=3; o<=10; o++){
    let next= n1 + n2;
 console.log(next);
    n1=n2;
    n2= next;   
}

//Find largest number in array:

let arrMax = [10, 45, 3, 99, 21];
console.log(Math.max(...arrMax));

//Count vowels in a string
let str= "javascript";
let countVow= 0;

for(p=0; p<str.length; p++){
    let ch= str[p].toLowerCase();
    if(
        ch=== "a" ||
        ch=== "e" ||
        ch=== "i" ||
        ch=== "o" ||
        ch=== "u" 
    )
    countVow++;
}
console.log(countVow);

//Palindrome check

let input= "madam";
reverseString= input.split('').reverse().join('');
if (reverseString=== input){
    console.log("palindrome");
}
    else{
        console.log("not palindrome");
    }
// 