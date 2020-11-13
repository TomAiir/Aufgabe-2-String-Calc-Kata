function stringCalculator(number){

    if(number === ' '){
        return 0;
    }
    var input = String(number);
    var splitString =  input.split(',');

    if (splitString.length > 1) {
        var result = parseInt(splitString[0]) + parseInt(splitString[1]);
        return result;
    }
    else {
        var result = parseInt(splitString[0]);
        return result;
    }
    
}

const sum = stringCalculator();
module.exports =  stringCalculator ;