function stringCalculator(numbers) {

    if (numbers === ' ') {
        return 0;
    }

    var splitString = /[,\n]+/;

    if (splitString.test(numbers)) {
        var result = 0;

        numbers = numbers.split(splitString);
        for (var i = 0; i < numbers.length; i++) {
            result += parseInt(numbers[i]);
        }

        return result;
    }

    return parseInt(numbers);
}

module.exports = stringCalculator;