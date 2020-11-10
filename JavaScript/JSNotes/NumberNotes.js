//Numbers
// JS numbers are the same as numbers we traditionally use in maths

// Basic operators
    // Multiply: n*x
    // Add: n+x
        // Note: be careful to intentionaly add numbers or strings when you intend to 
    // Divide: n/x
    // Compare: n > x, <, >=, <=
    // Modular: n % x
        // Definition returns the remainder of the first divided by the second
  
        // console.log(5 % 2);// 1
        // console.log(12 % 3);// 0
        // console.log(21 % 4);// 1
        // console.log(30 % 5);// 0
        // console.log(32 % 6);// 2
        // console.log(18 % 7);// 4
        // console.log(112341 % 2);// 1
        
        //edge cases
        console.log(0 % 3); // 0
        console.log(7 % 0); // NaN
        console.log(-4 % 2);// -0
        console.log(4 % -2);// 0
        console.log(0 % 0); // NaN
        console.log(3.333 % 3); //(0.333) 0.3330000000000002
        console.log(5.1415123 % 3); //(2.1415123) 2.1415122999999996



// Math Object:
    // Math object pretty much contains all 'normal' math operations other than minus, add, multiply, and divide
    // console.log(Math.sqrt(144)); // 12
    // console.log(Math.pow(12, 2)); // 144
    // console.log(Math.round(2.5)); // 3
    // console.log(Math.ceil(7.1)); // 8 (rounds up)
    // console.log(Math.floor(7.9)); // 7 (rounds up)
    // console.log(Math.abs(-22.5)); // 22.5
    // console.log(Math.min(0, 150, 30, 20, -8, -200));  // returns -200
    // console.log(Math.max(0, 150, 30, 20, -8, -200));  // returns 150
    // console.log(Math.random()); // return a number between 0 & 1

    // example of using random
    // console.log(Math.floor(Math.random()*5)+6)

    // var randomNum = Math.floor(Math.random()*5)+6
    // console.log(Math.floor(Math.random()*5)+6)
    // console.log(Math.floor(Math.random()*5)+6)
    // console.log(Math.floor(Math.random()*5)+6)
    // console.log(Math.floor(Math.random()*5)+6)
    // console.log(Math.floor(Math.random()*5)+6)
    // console.log(Math.floor(Math.random()*5)+6)
    // console.log(Math.floor(Math.random()*5)+6)
    // console.log(Math.floor(Math.random()*5)+6)


// increasing and decreasing variables short hand syntax
    var i = 0;
    i++ // will increase i by 1, this is often used in a loop 
    i-- // will decrease i by 1, this is often used in a loop (to iterate backwards)
    i += 1 // will increase i by 1
    i -= 1 // will decrease i by 1
    i = i + 1 // will increase i by 1
    i = i - 1 // will decrease i by 1
    i = i - 2 // will decrease i by 2