const fs = require('fs');
const util =require('util');

const readFileP = util.promisify(fs.readFile);
const readableFile = readFileP('./myfile.txt');
readableFile .then(data=> {
    console.log(data.length);
}).catch(err=>{
    console.log ('cannot read the original file');
})

const {sum,substraction}=require('./mymodule.js');
console.log('sum:', sum(4, 2));
console.log('substraction:', substraction(6, 3));



