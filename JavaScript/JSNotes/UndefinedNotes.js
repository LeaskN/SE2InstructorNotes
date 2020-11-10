// Undefined: 
    // Definition:
    //‘Undefined’ is a global variable that JavaScript creates at run time. This global variable is assigned to an object in one of the following cases :
        // 1. Declared but not defined –
            // JavaScript assigns ‘undefined’ to any object that has been declared but not initialized or defined. In other words, in a case where no value has been explicitly assigned to the variable, JavaScript calls it ‘undefined’.
        // 2. Array index or object property that does not exist.
        // 3. A function parameter that has not been supplied.
        // 4. A function that has a return without a return value.

    // Example:
        // var x; 
        // Here we have declared the variable x but it doesnt have a value, therefore it is undefined

        // Testing if undefined:
        // if( x === undefined){
        //     console.log('x is undefined');
        // } else {
        //     console.log('x is defined');
        // }