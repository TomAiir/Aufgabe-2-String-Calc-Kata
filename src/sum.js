function stringCalculator(numbers){


	if(numbers === ' '){
		return 0;
	}

    var negativeSplitString = /-\d*/g; // \d = find a digit
    if( negativeSplitString.test(numbers)){
        var errorString = "Negatives not allowed: ";
        numbers = numbers.match(negativeSplitString);
        for (var i = 0; i < numbers.length; i++){
            errorString += numbers[i] + ", "
        }
        errorString = errorString.slice(0, errorString.length - 2);
        throw errorString;
    }
    
    var splitString = /[,\n]+/;
    
	
    
	if( splitString.test(numbers) ){ 
		var totalSum = 0;
		
		numbers = numbers.split(splitString);
		for( var i = 0; i < numbers.length; i++){
			totalSum += parseInt(numbers[i]);
		}
		return totalSum;
	}
	
	return parseInt(numbers);
}

module.exports = stringCalculator;

