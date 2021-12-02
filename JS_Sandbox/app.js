let val;

// number to string
val = String(555);
// bool to string
val = String(true);
// date to string
val = String(new Date());
// array to string
val = String([1, 2, 3, 4])

// toString()
val = (5).toString();
val = (true).toString();

val = 5

val = parseInt('100.30');
val = parseFloat('100.30');

// output
console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed(2));