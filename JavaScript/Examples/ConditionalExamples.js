// replace all 'a's in any string with a dash

    var currentStr = 'Banananananananana!'
    for(var i = 0;i < currentStr.length; i++){
        if(currentStr.indexOf('a') > -1){
            currentStr = currentStr.replace('a', '-');
            console.log(currentStr);
        } else {
            console.log(`${currentStr} doesn't have an 'a' to replace.`);
            break;
        }
    }
    // if(currentStr.indexOf('a') > -1){
    //     currentStr = currentStr.replace('a', '-');
    //     console.log(currentStr);
    // } else {
    //     console.log(`${currentStr} doesn't have an 'a' to replace.`);
    // }
    // if(currentStr.indexOf('a') > -1){
    //     currentStr = currentStr.replace('a', '-');
    //     console.log(currentStr);
    // } else {
    //     console.log(`${currentStr} doesn't have an 'a' to replace.`);
    // }
    // if(currentStr.indexOf('a') > -1){
    //     currentStr = currentStr.replace('a', '-');
    //     console.log(currentStr);
    // } else {
    //     console.log(`${currentStr} doesn't have an 'a' to replace.`);
    // }
    // if(currentStr.indexOf('a') > -1){
    //     currentStr = currentStr.replace('a', '-');
    // } else {
    //     console.log(`No 'a' to replace in ${currentStr}.`);
    // }

