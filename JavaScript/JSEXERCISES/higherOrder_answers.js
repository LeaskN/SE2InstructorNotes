// Higher order functions
        // .filter()
        // .reduce()      
        // .map()
  
// filter questions
let arrOfNums = [-100, -50, -21, -3, -1, -2, 0, 1, 2, 3, 21, 50, 100, 999];
// Level 0
    // given an array of numbers filter out any that are larger than 10
    
    let largerThan10 = arrOfNums.filter(function(n){return n > 10});
    // console.log(largerThan10);

// Level 1
    // given an array of numbers filter out any that are divisible by 3
    let noThrees = arrOfNums.filter(function(n){return n % 3 !== 0});
    // console.log(noThrees);

    // given an array of nubers filter out any that are even
    let noEvens = arrOfNums.filter(function(n){return n % 2 !== 0});
    // console.log(noEvens);

// Level 2
    // given an array of strings, filter out any that are longer than 4 chars
    let arrOfStrs = ['this', 'is', 'a', 'complicated', 'topic'];
    let fourOrLess = arrOfStrs.filter(function(str){return str.length <= 4});
    // console.log(fourOrLess);

    // given an array of arrays, filter out any that are shorter than 10 elements
    let arrOfArrs = [[1,2,3,4], [0,1,2,3,4,5], ['a','b','c','d','e','f'], ['g']];
    let lessThan10Ele = arrOfArrs.filter(function(ele){return ele.length <= 10});
    // console.log(lessThan10Ele);
// Level 3
    // given an array of objects, filter out any that dont have a key called 'firstName'
    let arrOfObjs = [{test:'test'}, {name:'test'}, {test:'test'}, {firstName:'Jess'}];
    let noFistName = arrOfObjs.filter(function(obj){return !obj['firstName']});
    // console.log(noFistName);
// reduce questions 
// level 0:
    // given an array of numbers add them all together
    let sum = arrOfNums.reduce(function(a,n){return a + n})
    // console.log(sum);
// level 1:
    // given an array of numbers, multiply them all together
    let mult = arrOfNums.reduce(function(a, n){return a * n})
    // console.log(mult);
    // let arr = [5, 1, 2, 3, 4];
    // let lvl1 = arr.reduce((a,b) => a * b);
    // console.log(lvl1);
// level 2:
    // given an array of strings, concatiante them together 
    let concat = arrOfStrs.reduce(function(a,str){return a + str})
    let caps = ['A', 'B', 'C', '8', '20'];
    let num = ['8', '24'];
    let question2 = caps.reduce((a,b) => a + b);
    // console.log(concat);
// level 3: 
    // given an array of arrays make them all into one array 
    arrOfArrs = [[1,2,3,4], [0,1,2,3,4,5], ['a','b','c','d','e','f'], ['g']]; // [1,2,3,4,0,1,2,3,4,5,'a','b','c','d','e','f','g']
    // let oneArr = arrOfArrs.reduce(function(a, c){return a + ',' + c }).split(',');
    // let oneArr = arrOfArrs.reduce((a, b) => a + ',' + b).split(',');
    // console.log(oneArr);
// level 5:
    // given an array of strings, remove any vowels and concatenate them together 
    let concatNoVowels = arrOfStrs.reduce(function(a, str){return a + str.replace(/[AEIOU]/ig, '')}, '');
    let level5 = arrOfStrs.reduce((a, b) => a + b.replace(/[aeiou]+/g, ''), '');
    // console.log(concatNoVowels);

// map questions
// level 0:
    // given an array of numbers, return a new array with all numbers multiplied by 2
    let double = arrOfNums.map(function(num){return num*2});
    let level0 = arrOfNums.map(num => num * 2);
    // console.log(double);

// level 1:
    // given an array of numbers, return a new array with all numbers increased by 1
    let plus1 = arrOfNums.map(function(num){return num+1});
    let level1 = arrOfNums.map(num => num + 1);
    // console.log(plus1);
// level 2:
    // given an array of strings, return a new array with all strings as capitals
    // let caps = arrOfStrs.map(function(str){return str.toUpperCase()});
    // console.log(caps);
    // let level2 = arrOfStrs.map(str => str.toUpperCase());
    // console.log(level2);

// _______________________________________________________________________________________________________________

// Higher order exercises pt 2. No given Higher order function to use
    
// given an array of people objects, return only the females
    // the object will look like this: let sally = {name: 'Sally', age:55, gender: 'female'}
    let person1 = {
        name: 'Napoleon Bonaparte',
        age: '251',
        gender: 'male'
    };
    let person2 = {
        name: 'Elizabeth Tudor',
        age: '462',
        gender: 'female'
    };
    let person3 = {
        name: 'George Washington',
        age: '288',
        gender: 'male'
    };
    let person4 = {
        name: 'Rosa Parks',
        age: '107',
        gender: 'female'
    };
    let person5 = {
        name: 'Amelia Earhart',
        age: '123',
        gender: 'female'
    };

    let arrOfPeople = [person1, person2, person3, person4, person5];

    let allFemales = arrOfPeople.filter(person => person.gender === 'female');

    // console.log(allFemales);
    

// given an array of numbers, return an array without any even numbers
    // let nums = [0,1,2,3,4,5,6,7,8,9];

    // let evenNums = nums.filter(function(n){return n % 2 === 1});

    // console.log(evenNums);


// given an array of people objects, return an array with all ages
    // the object will look like this: let sally = {name: 'Sally', age: 55}

    let ages = arrOfPeople.map(currentPerson => currentPerson.age);
    console.log(ages);

    // part 2 find the average age of all people in the array (run a higher order function on your new array)

    let averageAge = ages.reduce((a, c) => Number(a) + Number(c)) / ages.length;

    console.log(averageAge);

// given an array of arrays, return an array of just the first elements of those inner arrays (only one array deep)
    let arrOfArr = [[{test:true},'b'], [null,'d','e'], [2], [undefined,'h']];

    let firstEles = arrOfArr.map(currentArr => currentArr[0]);

    console.log(firstEles);

// given an array of full names ('Sally Wadsworth') return the first and last initials

    let arrOfNames = arrOfPeople.map(a => a.name); // ['Napoleon Bonaparte', 'Elizabeth Tudor', 'George Washington', 'Rosa Parks', 'Amelia Earhart']

    let initials = arrOfNames.reduce((a, c) => {
        let fullName = c.split(' ');        // 'Lebron James'.split(' ') -> ['Lebron', 'James'];
        let firstInitial = fullName[0][0];  // ['Lebron', 'James'][0] -> 'Lebron'[0] -> 'L';
        let lastInitial = fullName[1][0];   // ['Lebron', 'James'][1] -> 'James'[0] -> 'J';
        a.push(firstInitial + lastInitial); // ['LJ']
        return a;
    }, []);

    console.log(initials);
// given an array of numbers find the largest number 
    // Solution 1:
        // let largest = arrOfNums.reduce((a, c) => Math.max(a, c));

    // Solution 2:
        // let largest = arrOfNums.reduce((a, c) => {
        //     if( a < c){
        //         return c;
        //     }
        //     return a;
        // });

    // Solution 3:
    let largest = arrOfNums.reduce((a, c) => a < c ? c : a);

    // console.log(Math.max(...arrOfNums));
    console.log(largest);



