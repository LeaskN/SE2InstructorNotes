// Boolean notes
    // Definition: The Boolean object represents two values, either "true" or "false". 
    // All falses: If value is omitted or is 0, -0, null, false, NaN, undefined, or an empty string (""), the object has an initial value of false.

    // declaring a variable, and setting equal to a boolean value
    // var something = true;
    // var other = false;

    // if(something){
    //     // do something
    //     console.log('true');
    // } else {
    //     // do something else
    //     console.log('false');
    // }

    // a function to find boolean values 
        // Boolean()
        // Examples:
            // console.log(Boolean(true));// logs true to the console because what is inbetween the parenthesis is equal to true 
            // console.log(Boolean(2>1)); // logs boolean true to the console
            // console.log(Boolean('Hello')); // Any string with a length greater than zero holds a boolean value of true
            // console.log(Boolean('')); // Any string with a length equal to zero holds a boolean value of false
            // console.log(Boolean(0)); // zero is the only number that holds a boolean of false
            // console.log(Boolean(10)); // logs true
            // console.log(Boolean(-10)); // logs true
            // console.log(Boolean(.123));// logs true
            // console.log(Boolean(12.54));// logs true
            // console.log(Boolean('0')); // is a string with a length greater than 0, therefore true  
            // console.log(Boolean(null)) // holds a boolean value of false
            // console.log(Boolean(10/'h')); // Not a number, or NaN, holds a boolean value of false
            // console.log(Boolean(10/'10')) // Math coerces string numbers to become number data types, therefore 10/10 = 1, 1 holds a boolean value of true

        // In summary
            // False scenarios:
            // 0, -0, null, false, NaN, undefined, or the empty string ("")

    // Comparisons:
        // Comparison operators are used in logical statements to determine equality or difference between variables or values.

        // Comparison examples:

            // Is equal value? Loosely equal
            // console.log(Boolean(4 == 2)) // false 4 does not loosely equal 2
            // console.log(Boolean(4 == '4')) // true 4 is loosely equal to '4'

            // // Is equal value and type? Strictly equal
            // console.log(Boolean(4 === '4')) // false, although 4 is equal to '4' the type 'Number' is not equal to the type 'String'. 4 is not strictly equal to the string of 4

            // // Is not loosely equal?
            // console.log(Boolean(4 != '4')) // false 4 DOES equal '4' therefore we log false
            
            // // Is not strictly equal? (Checks value and type)
            // console.log(Boolean(4 !== '4')) // true the first type does not equal the second type

            // // Is greater than?
            // console.log(Boolean(1 > -1)); // true

            // // Is less than?
            // console.log(Boolean(1 < -1)); // false

            // // Is greater than or equal to?
            // console.log(Boolean(0 >= -1)); // true

            // // Is less than or equal to?
            // console.log(Boolean(0 <= -1)); // false

        // Logical Operators:
            // and: &&
            // or:  ||
            // not: !   (this is called bang)
            // Examples:
            // console.log(Boolean(3 == 3)); // true
            // console.log(Boolean(4 == 3)); // false
            // console.log(Boolean(3 == 3 || 4 == 3)); // true
            // console.log(Boolean(3 == 4 && 3 == 3)); // false

            // Real example: Logging into a website and the username must be 3 chars long and shorter than 19 chars
            // var userName = "LeaskN";

            // if( userName.length > 18 ){
            //     console.log('Username is too long (maximum is 18 characters).');
            // } else if ( userName.length < 3){
            //     console.log('Username is too short (minimum is 3 characters).');
            // } else {
            //     console.log('Username: ' + userName);
            // }

            // example:
            // var Tim = {
            //     name: 'Tim', 
            //     height: 180
            // }

            // if(Tim.height > 100){
            //     console.log(Tim.name + ' is tall')
            // }
