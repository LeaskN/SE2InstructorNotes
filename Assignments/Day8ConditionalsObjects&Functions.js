// level 0
    // Declare an object called person. 
    // Give the person several properties, including full name, height, and more

    let person = {
        fullName: 'Jack Black',
        height: `5'00"`,
        profession: 'Actor',
        hairColor: 'Brown', 
        age: '51',
        broke: false,
    }

    // You'll be using this object for the remaining questions.
    // Q0.1
        // Add an email key value pair to the object called person
        // Creating an email property and setting it equal to Jack's email address.
        person.email = 'JackBlack@yahoo.com';
        
// level 1
    // Q 1.1    
        // Write some code that extracts the end of the email address
        // Log that to the console 
            // example 
                // input:
                // person = {
                //     fullName = 'Nic Leask',
                //     email = 'nic@gmail.com',
                // }
                // // output:
                // '@gmail.com'
                
                let endOfEmail = person.email.split('@')[1];
                // console.log('@' + endOfEmail);

// level 2
    // Q 2.1
        // write a conditional statement which checks if the person is 5'11", shorter, or taller.
        // If the person is the same log, "Same height as Beckham"
        // If the person is taller log, "Taller than Beckham"
        // If the person is shorter log, "Shorter than Beckham"
            // hint there are 12 inches in a foot, you may want to convert the height into only inches
            function heightConverter(str){
                let feet = Number(str.split("'")[0]);
                let inches = Number(str.split("'")[1].slice(0, -1));
                person.heightInInches = inches + (feet*12);
                console.log(person.heightInInches)
            }

            heightConverter(person.height);
            console.log(person.heightInInches);

            if(person.heightInInches > 71){
                console.log("Taller than Beckham");
            } else if (person.heightInInches === 71) {
                console.log("Same height as Beckham");
            } else if (person.heightInInches < 71) {
                console.log("Shorter than Beckham");
            }

    // Q 2.2
        // Create a function which takes in an object 
        // If the object doesn't have a specific key return 'No such value'.
        // If it does, return that key's value. 
        function hasValue(obj, str){
            if(obj[str] !== undefined){
                return `${person.fullName}, ${str}: ${obj[str]}`;
            } else {
                return `${person.fullName}, ${str}: no such value.`;
            }
        }

        console.log(hasValue(person, 'Nationality'))

// level 3
    // Q 3.1
        // Using the full name property, get the person's initials.
        // Create a new key called initials.
        // Set the value of this key to the person's initials.
            // Hint if you're getting stuck refer to last nights assignment in "SEInstructorNotes\Assignments\Day7Loops.js"

        function initialCreator(obj){
            let arrOfNames = obj.fullName.split(' ');
            obj.initials = '';
            for(let i = 0; i < arrOfNames.length; i++){
                obj.initials = obj.initials + arrOfNames[i][0];
            }
            return obj.initials;            
        }

        console.log(initialCreator(person));

        function initial(person){
            var nameSplt = person['fullName'].split(' ');
            var initials2 = '';
            for(var j = 0; j < nameSplt.length; j++){
              var name = nameSplt[j];
              var initial = name[0];
              initials2 = initials2 + initial;
            }
            return initials2;
        }
        console.log(initial(person));


