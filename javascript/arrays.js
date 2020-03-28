var a = ['arjun', 'narin', 'ram']; // array of string
document.write(a[0] + "<br>");
document.write(a);


var b = new Array('arjun', 'narin', 'ram');
document.write("<br>" + a);


var c = new Array();
c = ['arjun', 'ram', 'narin'];
for (var i = 0; i < 3; i++) {
    document.write("<br>" + c[i]);
}


//length of array
document.write("<br>" + c.length);

/*
 *      Methods of Array
 */


//sort
c = c.sort();
document.write("<br>" + c);


//push (only delete last element) 
c.push('Anand');
document.write("<br>" + c);

c.pop();
document.write("<br>" + c);


// shift (delets first element)
c.shift();
document.write("<br>" + c);


// unshift (adds element at first place)
c.unshift("Piyush");
document.write("<br>" + c)


// reverse 
c.reverse();
document.write("<br>" + c);


// isarray (checks wether the passed values is array or not)
var check = Array.isArray(c);
document.write("<br>" + check);


// concat (it is used to join to or more arrays)
var a = [10, 20, 30, 40];
var b = [50, 60, 70, 80, 90];
document.write("<br>" + a.concat(b));


// indexOf (it return the index of the element entered)
document.write("<br>" + c.indexOf('Piyush'));