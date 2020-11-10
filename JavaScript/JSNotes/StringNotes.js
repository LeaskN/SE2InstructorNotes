// Strings
    // Definition:  A set of characters that is used to represent text and is surrounded by quotes. '', "", ``
        // '' and "" can be used interchangably
        // `` are called template literals  
        // Strings, like all other primitive datatypes are immutable 
            // This means they are unchangeable
            // Example:
                // var greeting = 'Hello';
                // var newGreeting = greeting.replace('e', '-');
                // console.log(greeting); // logs 'Hello'
                // console.log(newGreeting);// logs 'H-llo'

        // Examples:
        // "The lazy dog jumped over the brown fox.";
        // "They're running!";
        // 'Voldemort said, "Avadakadavra!"';
        // `Voldemort said, "They're running"`;
        // var user = "Mark";
        // console.log('Welcome, ' + user + ' to Facebook!');
        // console.log(`Welcome, ${user} to Facebook!`);

    // Special characters:
        // "Ignore JS functionality" = \
        var quote = "\"To be or not to be\"";
        console.log(quote); // logs: "To be or not to be" (including those quotes)

        var backslash = "\\";
        console.log(backslash); // logs \
        // New line = \n
        var address = 'New York City\n706 Amsterdam Ave\n11111';
        console.log(address); // logs the string on 3 lines
        
    // Template literal highlights:
        // We can have JS inside the string by using this syntax `${JAVASCRIPT HERE}`
        // Example:
            var userName = 'Ash';
            var sentence = `Welcome ${userName}, thanks for logging into FB!`;
            console.log(sentence);

            var address2 = `30 Cranworth Road
            Winchester
            England`

            console.log(address2); // logs EVERY character between the backticks including spaces, tabs, enters, etc...



    // String Methods:
        // .length
            // definition: Returns the length of a string
            // example:
                var str1 = "Hello World!";
                // console.log(str1.length); // 12
            // Super helpful for getting last characters when combined with other methods (slice(start, str.length-1), str.charAt(str.length-1), or str[str.length-1])
        // .indexOf(substring)
            // Definition: Returns the index of the FIRST instance of a substring
            // Note: If the substring doesn't exist in the string, we get -1. This is helpful in if statements, if the substring exists do A else do B
            // example 1: 
                var str2 = "This is a test";
                // console.log(str2.indexOf('test')); // returns the value 10
                // console.log(str2.indexOf('is')); // returns the value 2
                // console.log(str2.indexOf(' ')); // returns the value 4
            // example 2:
                var greeting = "Welcome, user! Please enjoy the app!"
                // console.log(greeting.indexOf('W')); // 0
                // console.log(greeting.indexOf(',')); // 7
                // console.log(greeting.indexOf('Please')); // 15
                // console.log(greeting.indexOf(' ')); // 8
            // example 3:
                var name1 = 'Nicholas Leask';
                // console.log(name1.indexOf('x')); // -1, any time a character doesnt exist in a string and we use indexOf, we will return -1 (THIS IS HELPFUL AND IMPORTANT)
        // .slice(i, i2)
            // Definition: Returns a portion of a string. Inclusive on the start index, exclusive on the end. Can accept negative values. 
            // Examples:
                var fruits = 'Banana, Peach, Orange, Apple,';
                // console.log(fruits.slice(0, 6)); // 'Banana'
                // console.log(fruits.slice(8, 13)); // 'Peach'
                // console.log(fruits.slice(15, 21)); // 'Orange'
                // console.log(fruits.slice(23, 28)); // 'Apple'
                // console.log(fruits.length) // 29, last index is 28 but length is 29
                // console.log(fruits.slice(23, fruits.length - 1)); // Apple
                // console.log(fruits.slice(4, -5)); // na, Peach, Orange, A <-- this has cut from the 4th char to the length - 5 character, in this case 24th char

        // .split('-')
            // Definition: splits a string into an array based on a given character.
            // Note: commonly used with .join('-')
            // Example:
                var str3 = "This-is-a-string";
                // console.log(str3.split('-')); // ['This', 'is', 'a', 'string']
                // console.log(str3.split('-').join(' ')); // "This is a string"

        // .substr(i, n)
            // Definition: Returns a portion of a string. Inclusive on the start number, exclusive on the end. The end number is relative to the start index.
            // Works almost identically to .slice()
            // Examples:
                var fruits = 'Banana, Peach, Orange, Apple,';
                // console.log(fruits.substr(0, 6)); // 'Banana'
                // console.log(fruits.substr(8, 5)); // 'Peach'
                // console.log(fruits.substr(15, 6)); // 'Orange'
                // console.log(fruits.substr(23, 5)); // 'Apple'
                // console.log(fruits.substr(-6)); // 'Apple,'

        // .replace()
            // Definition: replaces the first instance of a character
            // note: can be used with regular expressions (regex) to change all instances of that char
            // Examples:
                var hasRepeatLetter = "Microsoft";
                // console.log(hasRepeatLetter.replace('i', 'a')); // 'Macrosoft
                // console.log(hasRepeatLetter.replace('soft', 'strong')); //'Microstrong'
                // console.log(hasRepeatLetter.replace('o', 'a')); //'Micrasoft'

                // Although replace is inefiicient and you'd ultimately want to avoid it, here is an example where we replace all 'o' in Micosoft with 'a' using replace

                // if(hasRepeatLetter.indexOf('o') > -1){
                //     // write the code to replace that letter
                //     hasRepeatLetter = hasRepeatLetter.replace('o', 'A')
                //     console.log(hasRepeatLetter)
                // } else {
                //     console.log('no o to replace')
                // }

                // if(hasRepeatLetter.indexOf('o') > -1){
                //     // write the code to replace that letter
                //     hasRepeatLetter = hasRepeatLetter.replace('o', 'A')
                //     console.log(hasRepeatLetter)
                // } else {
                //     console.log('no o to replace')
                // }

                // if(hasRepeatLetter.indexOf('o') > -1){
                //     // write the code to replace that letter
                //     hasRepeatLetter = hasRepeatLetter.replace('o', 'A');
                //     console.log(hasRepeatLetter);
                // } else {
                //     console.log('no o to replace');
                // }

        // .toUpperCase();
            // Note: helpful when comparing data
            // 'code' == 'Code' // false
            // 'test' ==='TEST' // false
            // 'CODE' == 'CODE' // true
            // 'TEST' ==='TEST' // true

            // Will convert any string to all uppercase
                // console.log('LeaskN' == 'leaskn') // false
                // console.log('LeaskN'.toUpperCase() == 'leaskn'.toUpperCase()) // true

        // .toLowerCase();
            // Note: helpful when comparing data
                // 'code' == 'Code' // false
                // 'test' ==='TEST' // false
                // 'code' == 'code' // true
                // 'test' ==='test' // true

            // Will convert any string to all lowercase
                // console.log('LeaskN' == 'leaskn') // false
                // console.log('LeaskN'.toLowerCase() == 'leaskn'.toLowerCase()) // true

        // .charAt(i)
            // Will return a character based on it's index
            // Note: if the index is larger than the last character index then we return an empty string: ''
            var townName = "Massapequa";
            // console.log(townName.charAt(5)); // returns p, AKA any character based on index
            // console.log(townName.charAt(0)); // returns M, AKA the first character
            // console.log(townName.charAt(townName.length - 1)); // returns a, AKA the last character
            // console.log(townName.charAt(1000)); // returns '' because there is no 1000th index

        // Property access: str[i] 
            // Will return a character based on the given index. 
            // Note: if the index is larger than the last character index then we return undefined
            // console.log(townName[5]); // returns p, AKA any character based on index
            // console.log(townName[0]); // returns M, AKA the first character
            // console.log(townName[townName.length - 1]); // returns a, AKA the last character
            // console.log(townName[1000]); // returns undefined becuase there is no 1000th index   