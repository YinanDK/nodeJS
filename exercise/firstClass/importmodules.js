const fs = require('fs');
const util = require('util');
const {checkIfExist,sum,divide} = require('./mymodule');

const readFileP = util.promisify(fs.readFile);

console.log('sum:', sum(2, 4) );
console.log('results:',divide(4, 2) );
const bigFile = readFileP('./myfile.txt','utf8');
const searchFile = readFileP('./anotherfile.txt','utf8');
bigFile.then(data =>{
    
})
 Promise.all([bigFile, searchFile]).then(([data, search])=>{
    checkIfExist(data, search);

}); 
/* only when .then is called the promise will run and resolved;
when resolved the function in then method will be excuted. */


console.log("this is the end of the program");