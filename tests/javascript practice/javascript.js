//Conditional Statement:
//if statement:
let age = 25;
if(age>=18){
    console.log("Adult");
}
//if esle Statement:

if(age<=18)
{
    console.log("Minor");
}else{
    console.log("Adult");
}

//else if:
let marks=75;
if (marks>=90){console.log("A");
}else if(marks>=70){
    console.log("B");
} else {
    console.log("C");
}

//Switch:
let day = 2;
switch(day){
    case 1:
        console.log("Monday");
        break;
     case 2:
        console.log("Tuesday");
        break;
        default:
        console.log("Invalid");
}
//Loops:
//1) For Loop:
for(let i=1; i<=5; i++){
    console.log(i);
}

//Ex: Loop through array:
let fruit = ["Apple", "Banana", "Mango"];
for (let i=0; i<fruit.length; i++){
    console.log(fruit[i]);
}

//Ex: Sum of num:
let sum = 0;
for(let i=1; i<=5; i++){
    sum= sum+i;
}
 console.log(sum);

 //Print Table:

 for(let i=1; i<=10; i++){
    console.log(2*i);
 }

 //Reverse loop:
 for(let i=5; i>=1; i--){
    console.log(i)
 }

//2) While loop:

let i =1;
while(i<=5){
    console.log(i);
    i++;
}

//reverse loop:
let j=5;
while(j>=1){
    console.log(j);
    j--;
}

//sum ex:
let k = 1;
let add = 0;
while(k<=5){
    add = add+k;
    k++;
}
console.log(add);

let fruits = ["banana", "apple", "Mango"];
let x=1;
while(x<2){
 x++;
}
  console.log(fruits[x]);

 let str = "pilot";
 for (m=0; m<=str.length-1; m++){
    newStr= str[m].length;
 }
   console.log(str(newStr));
   