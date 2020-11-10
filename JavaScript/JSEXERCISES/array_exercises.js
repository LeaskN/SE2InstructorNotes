// Log outputs to the console to ensure your work is accurate

// level 0
    // declare a variable and set it euqal to an array of your favorite tv shows
    // declare a variable and set it euqal to an array of your family members ages (lie if you want)
    var tvShows = ['Lucifer', 'Power', 'Black Lightning', 'For Life', 'Supernatural'];
    var famAges = [3, 8, 15, 20, 27];

// level 1
    // add a tv show to the end of your tv show array
    tvShows.push('Bobs Burgers');
    // remove the first element from your ages array
    famAges.pop();
// level 2
    // declare a variable and set it equal to your interests
    // using code, add a new interest to the front of the array 
    // using code, remove the last interest
    var interests = ['videogames', 'formula 1', 'new tech'];
    interests.unshift('IMSA Racing');
    interests.pop();
    // console.log(interests);

// level 3
    // given an array with a phone number from the USA, ['516-555-5555'] convert it into a string, add '+1' to the front, and convert it back to an array.

    // var numString = ['516-555-5555'];
    // // numString.splice(0, 0,'+1');
    // // // numString.unshift('+1');
    // // var number = numString.join('-');
    // // console.log(number);

    // var number = numString[0];
    // number = '+1-' + number;
    // numArray = [number];
    // console.log(numArray);

// level 4
    // given the following array, insert a new item into the center try without notes, use the internet if needed instead
    var fruits = ['apple', 'orange', 'peach', 'lemon', 'plum', 'grape', 'watermelon'];
    var frtNum = fruits.length;

    // last element in array or string called items: items[items.length - 1]
    // middle element in array or string called items: items[items.length/2]
    // first element in array or string called items: items[0]

    fruits.splice(frtNum/2, 0, 'Mango');
    // console.log(fruits);

// level 5
    var famousPeople = ['Barak Obama', 'Emma Watson', 'David Beckham', 'Justice Beaver', 'Will Smith'];
    // Given the previous array of names, get the last person's initials
    // Write pseudocode before starting   
    // HINT: Break this problem into parts, it will take multiple lines of code. 

    // get the last element from the famous people array
    // get the first initial and store it in a variable
    // get the index of the space
    // use space index to get next char
    // set that char equal to last initial 
    // log first initial and last initial together
    // var person = famousPeople[famousPeople.length - 1]; // grabs Justice Beaver from array
    // var firstInitial = person[0]; // J
    // var spaceIndex = person.indexOf(' '); // 7 for Justice Beaver
    // var lastInitial = person[spaceIndex + 1]; 

    // console.log(firstInitial + lastInitial);

    // console.log(famousPeople[famousPeople.length-1][0] + famousPeople[famousPeople.length-1][famousPeople[famousPeople.length-1].indexOf(' ') + 1]);
     
// level 6
    // given an array of names, get the middle person's initials

    var person = famousPeople[Math.round(famousPeople.length/2)]; // grabs Justice Beaver from array
    var firstInitial = person[0]; // J
    var spaceIndex = person.indexOf(' '); // 7 for Justice Beaver
    var lastInitial = person[spaceIndex + 1]; 

    console.log(firstInitial + lastInitial);