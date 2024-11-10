var name = ["muhammad sami"];
console.log(`my name is ${name}`);

var userName = {
    name : "muhammad sami"
}
console.log(userName);

//string method
var str = ["muhammad","sami","attari","Qadri","rizwi"]
console.log(str);
//number method
var num = [1,2,3,4,5,6,7,8,9,10]
console.log(num);

//bolean array
var boolean = ["true","false","true","false"]
console.log(boolean);
boolean.push("dalwa")

//mixed array
var mixed = ["sami","attari",2,4,6,"true","false"]
console.log(mixed);

//eduction available
var eduction = ["ssc","hsc","Bcs","Bs","Bcom","ms","m-fill","phd"]
console.log(eduction);

var studentName =["sami","bilal","mubassir"]

const numbers = [400,200,105]; 
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(studentName[0] +"  "+"student of one mark"+" "+ numbers[0]); 
console.log(studentName[1] +"  "+"student of two mark"+" "+ numbers[1]); 
console.log(studentName[2] +"  "+"student of three mark"+ " "+numbers[2]); 


const percentage1 = numbers[0]/500*100
console.log(studentName[0]+" "+percentage1+"%");
const percentage2 = numbers[1]/500*100
console.log(studentName[1]+" "+percentage2+"%");
const percentage3 = numbers[2]/500*100
console.log(studentName[2]+" "+percentage3+"%");



