//1. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
function sum1(a, b) {
    return a + b;
}
console.log(sum1(5, 10));
function sum2(a, b) {
    return a * a + b;
}
console.log(sum2(5, 5));//end bai1
//2. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.
function tuyetdoi(n) {
    if (n <= 19) {
        return (19 - n);
    }
    else {
        return (n - 19) * 3;
    }
}

console.log(tuyetdoi(12));
console.log(tuyetdoi(19));
console.log(tuyetdoi(22));
//end bai 2
//3.A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 3.

function kiemtra(){
    var a="1";
    var b="9";
    for (let i = 0; i < 10; i++) {
        if ((a+b+i)%3==0) {
            console.log(a+i+b);
        }       
    }
}
kiemtra();
function xet() {
    var a = "1234567890";
    for (var i = 0; i < 10; i++) {
        if (i % 3 == 0) {
            console.log(a + i);
        }
    }
}
xet();
//end bai 3
//4. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 6.
function kiemtra2(){
    var a="1";
    var b="9";
    for (let i = 0; i < 10; i++) {
        if ((a+i+b)%3==0 && b%2==0) {  
            console.log(a+i+b);        
        }
        else{
            console.log("[]");
        }
    }
}
kiemtra2();
function xet2(){
  var a=1234567890;
  for (var i = 0; i < 10; i++) {
    if (i % 6 == 0) {
        console.log(a + i);
    }
}
}
xet2();//end bai 4
//map
var numbers = [1, 2, 3, 4];
var doubled = numbers.map(item => item * 2);
console.log(doubled);
//filter
var numbers2 = [1, 2, 3, 4];
var evens = numbers2.filter(item => item % 2 === 0);
console.log(evens);
//reduce
var total = [0, 1, 2, 3].reduce((c, d)=> c + d,0);
console.log(total);
//find
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);
//some
const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(array.some(even));
//Give an example for add a new element to an array[] (at the end)
var arr = [1, 2, 3];
arr.unshift(0);
console.log(arr);
//Give an example for add a new element to an array[] (at the beginning)
var newFirstElement = 4
var newArray = [newFirstElement].concat(array)
console.log(newArray);
//Give an example for removing an element in array[]
var array5 = [2, 5, 9];
console.log(array5);
var index = array5.indexOf(5);
if (index > -1) {
    array5.splice(index, 1);
}
console.log(array5);