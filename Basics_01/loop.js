let sum = 0;
let i=1;
while (i <= 5) {
    sum= sum+i;
    i++;
}
//console.log(sum);
// Write a code using while loop that count down from 5 to 1 and stores the value in an array named "Arr"
let Arr=[]
let j= 5;
while(j>=1){
    Arr.push(j);
    j --;
}
//onsole.log(Arr);
// let teacollection=[ ]
// let tea
// do{
//     //tea = prompt("Enter your favourite tea (type 'stop' to finish)")

//     if( tea !== "stop"){
//         teacollection.push(tea)
//     }
// }while(tea !== "stop");

// Write a for loop 
let multipy=[]
let numbers=[2,4,6]
for(let i=0; i < numbers.length ; i++ ){
     let takenumber = numbers[i] * 2;
     multipy.push(takenumber);
}
// console.log(multipy);

// Default Syntax
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

let city= ["Paris","Newwork","Tokyo","Las Vegas","london"]
let citylist=[];
for (let i = 0; i < city.length; i++) {
    const element = city[i];
    citylist.push(element)
}
console.log(citylist)
