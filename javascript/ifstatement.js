/*
  prompt is used for input
*/

var age = prompt('Enter your age: ');

document.write(age);

if (age >= 18) {
    alert('Adult...');
} else if (age < 18) {
    alert('Underage');
} else {
    alert('enter a valid number');
}