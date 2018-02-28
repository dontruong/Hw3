var arr= [];

var x = prompt('Please input the start: ')
var x = parseInt(x);
var y  = prompt('Please input end: ')
var y = parseInt(y);
var z = prompt('Please input step: ')
var z = parseInt(z);

if(z == 0){
    alert("you entered 0 increments , refresh and try again")
}
if(isNaN(x)){
    alert ("one of inputs is not a number, refresh and try again ");
    
    }
if(isNaN(y)){
    alert ("one of inputs is not a number, refresh and try again ");
        
    }
if(isNaN(z)){
    alert ("one of inputs is not a number, refresh and try again ");
        
    }

for(var a=x; a< y;a+=z) {
    arr.push(a);

}
function sum(i, h) {
    return i + h;
}    
function bin(p) {
    var result = p.toString(2);
    return result;
}
function binarr(arr) {
    var binarr = []
    for (var i = 0; i < arr.length; i++) {
        binarr.push(bin(arr[i]));
    }
    
    return binarr;
    
}
arr.push(y);

document.write("array is " + arr +"<br>");
document.write("sum is " + arr.reduce(sum) +"<br>");
document.write("binary is "+ binarr(arr));


