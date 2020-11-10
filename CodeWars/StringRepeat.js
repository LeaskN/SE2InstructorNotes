// Solution 1
function repeatStr(n, s) {
    return s.repeat(n);
}

// Solution 2
function repeatStr(n, s) {
    var output = '';

    for(var i = 0; i < n; i++){
        output += s;
    }

    return output;
}


console.log(repeatStr(5, 'Hello'))