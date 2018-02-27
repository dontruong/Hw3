var arr= [];

var x = prompt('Please input the start: ')

var y  = prompt('Please input end: ')

var z = prompt('Please input step: ')

if(z == 0){
    alert("you entered 0 increments , refresh and try again")
}
var x = parseInt(x);
var y = parseInt(y);
var z = parseInt(z);

for(var a=x; a< y;a+=z) {
    arr.push(a);

}

for(var a=x; a>y;a+=z) {
    arr.push(a);

}

function sum(i, h) {
    return i + h;
}
arr.push(y);

if(isNaN(arr.reduce(sum))){
    alert ("one of inputs is not a number, refresh and try again ");
    
    }
 function binary(r,y){
     var bin = r.tostring(2);
     return bin;
 }

document.write("array is" + arr +"<br>");
document.write("sum is " + arr.reduce(sum) +"<br>");
document.write("binary is "+ binary(a,y));


