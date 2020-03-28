// function key word is used to define any function


// void function decleration 
function hello() {
    alert('Piyush Anand');
}

hello(); // void function call



// int function decleration with return type
function sum() {
    var a, b, c = 0;
    a = 10;
    b = 10;
    c = a + b;
    return c;
}

document.write(sum());


// passing parameter
function sumwithparameter(a, b) {
    var c = 0;
    c = a + b;
    return c;
}
document.write("<br>" + sumwithparameter(10, 20));
document.write("<br>" + sumwithparameter(20, 30));
document.write("<br>" + sumwithparameter(100, 100));