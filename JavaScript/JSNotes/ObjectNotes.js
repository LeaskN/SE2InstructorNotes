// Objects
    // Definition:  An unordered collection of related data with key-value pairs. 
    // Syntax:
        var obj1 = {} // an empty object
        var obj2 = {key: 'value'} // an object on one line
        // Most common syntax:
        var obj3 = {
            key1: 'value', 
            key2: 'value'
        }
        // console.log(obj3);
    // Notations:
        // Dot notation 
            // Great for quickly accessing keys and getting their values
        // Bracket notation
            // Great in all scenarios, just a little more complex 
            // CAN take in variables or strings 
            // MUST be used in a for in loop
                // Example:
                    var key = 'name';
                    var obj4 = {
                        name: 'Sharmania Greene',
                        age: '30',
                        height: `5'10"`
                    }
                    // console.log(obj4[key])// using bracket notation with a variable to get access to obj4's name value
                    // console.log(obj4['age'])// using bracket notation with a string to get access to obj4's age value
                    // console.log(obj4.height)// using dot notation to get access to obj4's height value

// Examples:
        var ages = {
            user1: ['Nicole', 23], 
            user2: ['Mike', 23],
            user3: ['Sammy', 100],
        }
        // console.log(ages);



        var person = {
            firstName: 'David',
            lastName: 'Beckham',
            height: "5'11\""
        }
        // console.log(`Welcome ${person.firstName}. You look short to me but I'm surprised to see you're ${person.height}`)
        // console.log(`Welcome ${person[string]}. You look short to me but I'm surprised to see you're ${person['height']}`)
        // note:
            // You'll usually see dot notation but bracket works in all scenarios
            // Dot is commonly used because its faster to write
        var users = [
            {
                firstName: 'Mark',
                lastName: 'Zuckerberg',
                id: 0
            },
            {
                firstName: 'Jeff',
                lastName: 'Bezos',
                id: 1

            },
            {
                firstName: 'Elon',
                lastName: 'Musk',
                id: 2
            }
        ]

        // console.log(users);

    var car = {
        name: '',
        color: '', 
        numOfWheels: 4,
        model: '',
        type: '',
        sunroof: false, 
        miles: 0
    }

    // console.log(car)
    // car.name = 'Porshe';
    // car.color = 'Racing Green';
    // car.model = '911';
    // car.type = 'Exotic';
    // car.sunroof = true;
    // car.miles = 10000;
    // car['interior'] = 'Leather'; // creating a new Key-Value pair with bracket notation
    // console.log(car);

    var keys = ['name', 'color', 'model', 'type', 'sunroof', 'miles'];
    var values = ['Porshe', 'Racing Green', '911', 'Exotic', true, 10000];
    var newCar = {};
    for(var i = 0; i < keys.length;i++){
        newCar[keys[i]] = values[i];
    }

    console.log(newCar);

    delete newCar.miles;

    console.log(newCar);

