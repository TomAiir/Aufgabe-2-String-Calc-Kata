function stringCalculator(numbers){


	if(numbers === ' '){
		return 0;
	}

	
    var splitString = /[,\n]+/;
    
	if(numbers.includes("//")){
		var inputDelimiter = /..(.+).n(.*)/g; // g = perform global match
		var CaptureGroup = inputDelimiter.exec(numbers);
		var newSplit = CaptureGroup[1]; 
		splitString = new RegExp('[,//n' + newSplit + ']' ); // Regular Expression = Search Patterns
		numbers = CaptureGroup[2]; 
    }
    

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

