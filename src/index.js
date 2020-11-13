const  stringCalculator  =  require('./sum')

var userArgs = process.argv.slice(2);

var value1 = parseInt(userArgs[0]);
var value2 = parseInt(userArgs[1]);

const answer = stringCalculator(value1+value2);

if(value1 || value2 > 0) {

console.log('Result: ' + answer);

}


else {

    console.log('Negatives not allowed: ' + value1 +" "+ value2)
}