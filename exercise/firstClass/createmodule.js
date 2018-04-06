 /**
  * 
  * @param {string} data 
  * @param {string} search 
  */

function checkIfExist(data, search){
    if(data.indexOf(search) !== -1){
        console.log("find it");
    } else{
        console.log("could not find it!")
    }
}
  
/**
 * 
 * @param {number} a 
 * @param {number} b 
 */
function sum(a, b){
    return a + b;
}
 
 
/**
 * 
 * @param {number} c 
 * @param {number} d 
 */
function divide(c, d){
    return c / d;
}

module.exports = {
    checkIfExist: checkIfExist,
    sum:sum,
    divide:divide
} 