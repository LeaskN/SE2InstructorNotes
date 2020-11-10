var condition_is_met = 1; // needed for notes not to throw error
var condition2_is_met = 2;// needed for notes not to throw error

// Conditional
    // Note: 'if' or 'if/else' statement
    // Definition: 
        // Executes a statement if a specefied condition is met (true/truthy). 
        // If that condition is false, another statement or lack there of is executed.

    // Syntax:
        // "if statement":
            if(condition_is_met){
                // execute this code
            }
        // if/else 
            if(condition_is_met){
                // execute this code if condition IS met
            } else {
                // execute this code if conditon ISNT met
            }
        // if/else can have many 'else if' statements
            if(condition_is_met){
                // execute this code if condition IS met
            } else if (condition2_is_met){
                // execute this code if condition2 IS met
                // there can be infinite else if statements 
            } else {
                // execute this code if conditon ISNT met
            }

// Note: Comparison operators go hand-in-hand with conditionals
    // >
    // <
    // >=
    // <=
    // ==
    // ===
    // !=
    // !==
    // &&
    // ||
    // !
    // remember every value has its own boolean value

// Examples:
    // var food = "Ice Cream";

    // if(food === "Pizza"){
    //     console.log('We have Pizza!');
    // } else {
    //     console.log('We dont have Pizza, we have ' + food + '!');
    // }

    var sports = ['Soccer', 'Racing', 'Basketball', 'Boxing'];

    // console.log(['Soccer', 'Racing', 'Basketball', 'Boxing'].indexOf('Swimming'));
    // console.log('Hello World'.indexOf('x'));

    // if(sports.indexOf('Racing') > -1){
    //     console.log('I prefer Racing');
    // } else if (sports.indexOf('Running') > -1){
    //     console.log('I prefer running!');
    // } else if (sports.indexOf('Soccer') > -1){
    //     console.log('I prefer soccer!');
    // } else {
    //     console.log('I dont play sports');
    // }

    // check if a user is male or female
    // var users = ['Sarah, Female', 'Mike, Male', 'Max, undisclosed'];

    // function checkGender(arr){
    //     var genders = [];

    //     for(var i = 0; i < arr.length; i++){
    //         var currentUser = arr[i];

    //         if(currentUser.indexOf('Male') > -1){
    //             genders.push('Male');
    //         } else if (currentUser.indexOf('Female') > -1){
    //             genders.push('Female');
    //         } else {
    //             genders.push('Other');
    //         }
    //     }
    //     return genders;
    // }

    // console.log(checkGender(users))

    // Psudocode for FB default profile images
        // if(user1231231123.profilePic){
        //     // Use user's upload 
        // } else if (user1231231123.gender === 'male') {
        //     // Pick male default
        // } else if(user1231231123.gender === 'female'){
        //     // Pick female defualt
        // }

    var age = 20;
    var id = true;

    if(age >= 21 && id === true){
        console.log('Come on in!');
    } else {
        console.log('Youre not allowed in');
    }

    if(age < 21 || id === false){
        console.log('Youre not allowed in');
    } else {
        console.log('Come on in!');
    }

    