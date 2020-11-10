// Primitive Data Types:
    // Definition: Primitive Data Types ARE NOT mutable, cannot be changed
      // Example of immutability:
      // var str = 'popcorn';

      // console.log(str.slice(1)); // 'opcorn'
      // console.log(str) // 'popcorn'
  // Strings: a string is a sequence of characters used to represent text surrounded by quotes. ``, '', ""
  // Numbers: Hold numeric values, can be integers, decimals, negatives, positives, and so on.. 
  // Boolean: a logical data type that can have only the values true or false
  // Null: represents a reference that points to a nonexistent value
    // the intentional absence of anything 
  // Undefined: is a primitive value automatically assigned to variables that have just been declared
  // (Sometimes Symbol): important thing is that it creates completely unique values ie: 's' != 's'

// Non-Primitive Data Types:
    // Definition: Non-Primtive Data Types ARE mutable, they can be changed
  // Objects: list of key-value pairs without any specific order
  // Arrays: a list of comma-seperated items. Can contain any other data types. Secretly an Object.
  // Functions:

// know the differences between defined, undefined, null, & not defined
// defined:
  var thing1 = 'something'
  console.log(thing1);
// undefined
  var thing2;
  console.log(thing2);
// null
  var thing3 = null;
  console.log(thing3);
// not defined 
  //no decleration
  console.log(thing4);