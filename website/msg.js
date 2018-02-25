var x,y,z,sum;

x = prompt('Please input the start: ')

y  = prompt('Please input end: ')

z = prompt('Please input step: ')


document.write("array is " ,x+" ",y+" " , z+" " +"<br>" ); 

x = parseInt(x);
y = parseInt(y);
z = parseInt(z);


function sum (x,z,y){
    return x+z+y
}

document.write("sum is "+sum(x,y,z)+"<br>");

document.write((x.toString(2)).substr(-8)+",");

document.write((y.toString(2)).substr(-8)+",");

document.write((z.toString(2)).substr(-8)+",");

if(isNaN(sum(x,y,z))){

    alert ("one of inputs is not a number, refresh and try again ");
    
    }

