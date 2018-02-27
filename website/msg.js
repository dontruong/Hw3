var x,y,z;

x = prompt('Please input the start: ')

y  = prompt('Please input end: ')

z = prompt('Please input step: ')


x = parseInt(x);
y = parseInt(y);
z = parseInt(z);


function sum (x,z,y){
    return x+z+y
}

if(isNaN(sum(x,y,z))){

    alert ("one of inputs is not a number, refresh and try again ");
    
    }

if(x == 0){
    alert("you entered 0 , refresh and try again")
}

if(y == 0){
    alert("you entered 0 , refresh and try again")
}

if(z == 0){
    alert("you entered 0 , refresh and try again")
}

document.write("array is " ,x+", ",y+", " , z +"<br>" ); 

document.write("sum is "+sum(x,y,z)+"<br>");

document.write("binary is "+(x.toString(2)) +", "+ (y.toString(2))+", "+ (z.toString(2)));



